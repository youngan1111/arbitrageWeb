// an example of combining SwapWidget with wallet-selector
import * as React from "react"
import { SwapWidget } from "@ref-finance/ref-sdk"

// please check on wallet-selector example about how to set WalletSelectorContext
import { useWalletSelector } from "./WalletSelectorContext"

import { WalletSelectorTransactions, NotLoginError } from "@ref-finance/ref-sdk"

export const Widget = () => {
  const { modal, selector, accountId } = useWalletSelector()

  const [swapState, setSwapState] =
    (React.useState < "success") | "fail" | (null > null)
  const [tx, setTx] = (React.useState < string) | (undefined > undefined)
  React.useEffect(() => {
    const errorCode = new URLSearchParams(window.location.search).get(
      "errorCode"
    )

    const transactions = new URLSearchParams(window.location.search).get(
      "transactionHashes"
    )

    const lastTX = transactions?.split(",").pop()

    setTx(lastTX)

    setSwapState(!!errorCode ? "fail" : !!lastTX ? "success" : null)

    window.history.replaceState(
      {},
      "",
      window.location.origin + window.location.pathname
    )
  }, [])

  const onSwap = async (transactionsRef) => {
    const wallet = await selector.wallet()
    if (!accountId) throw NotLoginError

    wallet.signAndSendTransactions(
      WalletSelectorTransactions(transactionsRef, accountId)
    )
  }

  const onConnect = () => {
    modal.show()
  }

  const onDisConnect = async () => {
    const wallet = await selector.wallet()
    return await wallet.signOut()
  }

  return (
    <SwapWidget
      onSwap={onSwap}
      onDisConnect={onDisConnect}
      width={"400px"}
      connection={{
        AccountId: accountId || "",
        isSignedIn: !!accountId,
      }}
      transactionState={{
        state: swapState,
        setState: setSwapState,
        tx,
        detail: "(success details show here)",
      }}
      enableSmartRouting={true}
      onConnect={onConnect}
      defaultTokenIn={"wrap.testnet"}
      defaultTokenOut={"ref.fakes.testnet"}
    />
  )
}
