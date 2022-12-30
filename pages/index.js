import Header from "../components/Header"
import { useEffect, useState } from "react"
import { WebSocket } from "ws"

export default function Home() {
  // const [wsInstance, setWsInstance] = useState(null)
  const isBrowser = typeof window !== "undefined"
  const futures = "btcusdt"

  useEffect(() => {
    if (isBrowser) {
      const ws = new WebSocket(
        `wss://fstream.binance.com/ws/${futures}@markPrice@1s`
      )

      ws.on("message", (data) => {
        const markPrice = JSON.parse(data)
        console.log(markPrice)
      })
    }
  }, [])

  return (
    <>
      <Header />
    </>
  )
}
