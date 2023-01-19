import Header from "../components/Header"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import axios from "axios"
import thousandsSeparator from "../utils/thousandsSeparator"
import dynamic from "next/dynamic"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const ComponentsWithNoSSR = dynamic(() => import("../components/BarChart"), {
  ssr: false,
})

export default function Binancedydx() {
  const [binanceSell1Price, setBinanceSell1Price] = useState(null)
  const [binanceBuy1Price, setBinanceBuy1Price] = useState(null)

  const [dydxSell1Price, setDydxSell1Price] = useState(null)
  const [dydxBuy1Price, setDydxBuy1Price] = useState(null)

  const [chartData, setChartData] = useState(null)
  const [chartLabel, setChartLabel] = useState(null)
  const [dataInterval, setDataInterval] = useState(10)

  const futuresBinance = "btcusdt"
  const futuresDydx = "BTC-USD"

  useEffect(() => {
    // for bar chart
    const getData = async () => {
      const response = await axios.get("/api/binanceDydx")
      setChartData(
        response.data.rows.map((ele) => ele.binanceBid1 - ele.dydxBid1)
      )
      setChartLabel(response.data.rows.map((ele) => ele.createdTime))
    }
    getData()

    // binance
    const binanceOrderbook = new WebSocket(
      `${process.env.NEXT_PUBLIC_BINANCE_TESTNET_WEBSOCKET}/stream?streams=${futuresBinance}@depth5@100ms`
    )
    binanceOrderbook.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setBinanceSell1Price(Number(json.data.a[0][0]))
      setBinanceBuy1Price(Number(json.data.b[0][0]))
    }

    // dydx
    const dydxOrderbook = new WebSocket(
      process.env.NEXT_PUBLIC_DYDX_TESTNET_WEBSOCKET
    )
    dydxOrderbook.onopen = () => {
      dydxOrderbook.send(
        JSON.stringify({
          type: "subscribe",
          channel: "v3_orderbook",
          id: "BTC-USD",
        })
      )
    }

    let orderBook = {}

    dydxOrderbook.onmessage = ({ data }) => {
      const dydx = JSON.parse(data)

      if (dydx.type == "subscribed") orderBook = dydx.contents
      else if (dydx.type == "channel_data") {
        dydx.contents.bids.forEach((ele) => {
          for (let i = 0; i < orderBook.bids.length; i++) {
            if (
              orderBook.bids[i].price == ele[0] &&
              (orderBook.bids[i].offset === undefined ||
                (orderBook.bids[i].offset !== undefined &&
                  orderBook.bids[i].offset < dydx.contents.offset))
            ) {
              if (ele[1] == "0") {
                orderBook.bids.splice(i, 1)
                break
              }
              orderBook.bids[i].size = ele[1]
              orderBook.bids[i].offset = dydx.contents.offset
              break
            } else if (Number(ele[0]) > Number(orderBook.bids[i].price)) {
              orderBook.bids.splice(i, 0, {
                size: ele[1],
                price: ele[0],
                offset: dydx.contents.offset,
              })
              break
            }
          }
        })

        dydx.contents.asks.forEach((ele) => {
          for (let i = 0; i < orderBook.asks.length; i++) {
            if (
              orderBook.asks[i].price == ele[0] &&
              (orderBook.asks[i].offset === undefined ||
                (orderBook.asks[i].offset !== undefined &&
                  orderBook.asks[i].offset < dydx.contents.offset))
            ) {
              if (ele[1] == "0") {
                orderBook.asks.splice(i, 1)
                break
              }
              orderBook.asks[i].size = ele[1]
              orderBook.asks[i].offset = dydx.contents.offset
              break
            } else if (Number(ele[0]) < Number(orderBook.asks[i].price)) {
              orderBook.asks.splice(i, 0, {
                size: ele[1],
                price: ele[0],
                offset: dydx.contents.offset,
              })
              break
            }
          }
        })

        setDydxSell1Price(Number(orderBook.asks[0].price))
        setDydxBuy1Price(Number(orderBook.bids[0].price))
      }
    }
  }, [])

  return (
    <>
      <Header path="/binancedydx" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Arbitrage testnet
      </Typography>

      {dydxBuy1Price > binanceSell1Price ? (
        <>
          <Typography marginLeft={3}>dYdX가 Binance보다 높다</Typography>
          <Typography marginLeft={3}>
            dYdX에서 {thousandsSeparator(dydxBuy1Price)}에 매도 & Binance에서{" "}
            {thousandsSeparator(binanceSell1Price)}에 매수
          </Typography>
          <Typography marginLeft={3}>
            차이:&nbsp;
            {Number(dydxBuy1Price - binanceSell1Price).toFixed(2)}
          </Typography>
        </>
      ) : binanceBuy1Price > dydxSell1Price ? (
        <>
          <Typography marginLeft={3}>Binance가 dYdX보다 높다</Typography>
          <Typography marginLeft={3}>
            Binance에서 {thousandsSeparator(binanceBuy1Price)}에 매도 & dYdX에서{" "}
            {thousandsSeparator(dydxSell1Price)}에 매수
          </Typography>

          <Typography marginLeft={3}>
            차이:&nbsp;
            {Number(binanceBuy1Price - dydxSell1Price).toFixed(2)}
          </Typography>
        </>
      ) : (
        <Typography marginLeft={3}>No chance</Typography>
      )}

      <Paper elevation={1} sx={{ m: 3, width: "55%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Exchange</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">매수 1호가 ($)</TableCell>
                <TableCell align="right">매도 1호가 ($)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  BINANCE
                </TableCell>
                <TableCell component="th" scope="row">
                  {futuresBinance}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceBuy1Price)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceSell1Price)}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  dYdX
                </TableCell>
                <TableCell component="th" scope="row">
                  {futuresDydx}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxBuy1Price)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxSell1Price)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <FormControl
        variant="standard"
        sx={{ ml: 3, marginY: 0, minWidth: 120 }}
        size="small"
      >
        <InputLabel>Interval</InputLabel>
        <Select
          defaultValue=""
          value={dataInterval}
          label="Interval"
          onChange={(event) => {
            setDataInterval(event.target.value)
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>

      <ComponentsWithNoSSR
        chartData={chartData}
        chartLabel={chartLabel}
        topLabel={"BINANCE Bid1 - dYdX Bid1 ($)"}
      />
    </>
  )
}
