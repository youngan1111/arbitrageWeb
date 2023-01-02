import Header from "../components/Header"
import { useEffect, useState } from "react"

export default function Home() {
  const [markPrice, setMarkPrice] = useState(null)
  const futures = "btcusdt"

  useEffect(() => {
    const markPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${futures}@markPrice@1s`
    )
    markPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      console.log(json.E)
      setMarkPrice(json.E)
    }
  }, [])

  // const socketInitializer = async () => {
  //   const markPriceEvery1sec = new WebSocket(
  //     `wss://fstream.binance.com/ws/${futures}@markPrice@1s`
  //   )
  //   markPriceEvery1sec.onmessage = ({ data }) => {
  //     const json = JSON.parse(data)
  //     console.log(json.E)
  //     setMarkPrice(json.E)
  //   }
  // }

  return (
    <>
      <Header />
      {markPrice}
    </>
  )
}
