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
  const [binanceMarkPrice, setBinanceMarkPrice] = useState(1)
  const [binanceIndexPrice, setBinanceIndexPrice] = useState(1)
  const [binanceFundingRate, setBinanceFundingRate] = useState(null)
  const [binanceBid1, setBinanceBid1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [binanceAsk1, setBinanceAsk1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [dydxMarkPrice, setDydxMarkPrice] = useState(1)
  const [dydxIndexPrice, setDydxIndexPrice] = useState(1)
  const [dydxFundingRate, setDydxFundingRate] = useState([])
  const [dydxBid1, setDydxBid1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [dydxAsk1, setDydxAsk1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [chartData, setChartData] = useState(null)
  const [chartLabel, setChartLabel] = useState(null)
  const [nextBinanceFundingRate, setBinanceNextFundingRate] = useState(null)
  const [nextDydxFundingRate, setDydxNextFundingRate] = useState(null)
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
    const binanceMarkPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${futuresBinance}@markPrice@1s`
    )
    binanceMarkPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setBinanceMarkPrice(json.p)
      setBinanceIndexPrice(json.i)
      setBinanceFundingRate(json.r)
      setBinanceNextFundingRate(json.T)
    }
    const binanceOrderBookEvery100ms = new WebSocket(
      `wss://fstream.binance.com/stream?streams=${futuresBinance}@depth10@500ms` // 250ms, 500ms or 100ms
    )
    binanceOrderBookEvery100ms.onmessage = ({ data }) => {
      const json = JSON.parse(data).data
      setBinanceBid1(json.b[0])
      setBinanceAsk1(json.a[0])
    }

    // dydx
    setInterval(async () => {
      const { data } = await axios.get("https://api.dydx.exchange/v3/markets", {
        params: {
          market: futuresDydx,
        },
        validateStatus: (status) => status < 500,
      })
      setDydxMarkPrice(data.markets[futuresDydx].oraclePrice)
      setDydxIndexPrice(data.markets[futuresDydx].indexPrice)
      setDydxFundingRate(data.markets[futuresDydx].nextFundingRate)
      setDydxNextFundingRate(data.markets[futuresDydx].nextFundingAt)
    }, 1000)
    setInterval(async () => {
      const { data } = await axios.get(
        "https://api.dydx.exchange/v3/orderbook/BTC-USD",
        {
          validateStatus: (status) => status < 500,
        }
      )
      setDydxAsk1(data.asks[0])
      setDydxBid1(data.bids[0])
    }, 500)
  }, [])

  return (
    <>
      <Header path="/binancedydx" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Analyze
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={"5%"}>Exchange</TableCell>
                <TableCell width={"5%"}>Symbol</TableCell>
                <TableCell align="right">매수호가/수량 Bid1 ($/BTC)</TableCell>
                <TableCell align="right">매도호가/수량 Ask1 ($/BTC)</TableCell>
                <TableCell align="right">청산가 ($)</TableCell>
                <TableCell align="right">Index Price ($)</TableCell>
                <TableCell align="right">Funding Rate (%)</TableCell>
                <TableCell align="right">Next Funding Rate Time</TableCell>
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
                  {thousandsSeparator(binanceBid1[0])} / {binanceBid1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceAsk1[0])} / {binanceAsk1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceMarkPrice)}
                </TableCell>
                <TableCell align="right">{binanceIndexPrice}</TableCell>
                <TableCell align="right">{binanceFundingRate * 100}</TableCell>
                <TableCell align="right">
                  {new Date(nextBinanceFundingRate).toLocaleString()}
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
                  {thousandsSeparator(dydxBid1.price)} / {dydxBid1.size}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxAsk1.price)} / {dydxAsk1.size}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxMarkPrice)}
                </TableCell>
                <TableCell align="right">{dydxIndexPrice}</TableCell>
                <TableCell align="right">{dydxFundingRate * 100}</TableCell>
                <TableCell align="right">
                  {new Date(nextDydxFundingRate).toLocaleString()}
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  비교
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  {binanceBid1[0] > dydxBid1.price
                    ? `BINANCE가 $${(binanceBid1[0] - dydxBid1.price).toFixed(
                        4
                      )} 높다`
                    : `dYdX가 $${(dydxBid1.price - binanceBid1[0]).toFixed(
                        4
                      )} 높다`}
                </TableCell>
                <TableCell align="right">
                  {binanceAsk1[0] > dydxAsk1.price
                    ? `BINANCE가 $${(binanceAsk1[0] - dydxAsk1.price).toFixed(
                        4
                      )} 높다`
                    : `dYdX가 $${(dydxAsk1.price - binanceAsk1[0]).toFixed(
                        4
                      )} 높다`}
                </TableCell>
                <TableCell align="right">
                  {binanceMarkPrice > dydxMarkPrice
                    ? `BINANCE가 $${(binanceMarkPrice - dydxMarkPrice).toFixed(
                        4
                      )} 높다`
                    : `dYdX가 $${(dydxMarkPrice - binanceMarkPrice).toFixed(
                        4
                      )} 높다`}
                </TableCell>
                <TableCell align="right">
                  {binanceIndexPrice > dydxIndexPrice
                    ? `BINANCE가 $${(
                        binanceIndexPrice - dydxIndexPrice
                      ).toFixed(4)} 높다`
                    : `dYdX가 $${(dydxIndexPrice - binanceIndexPrice).toFixed(
                        4
                      )} 높다`}
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography sx={{ ml: 3, mt: 1 }} variant="subtitle1" gutterBottom>
        바이낸스 USDT 선물 수수료: 0.02%
      </Typography>
      <Typography sx={{ ml: 3, mb: 2 }} variant="subtitle1" gutterBottom>
        dYdX 수수료: 0%($10만 이하) or 0.02%($10만 초과)
      </Typography>
      <Typography sx={{ ml: 3, mb: 2 }} variant="subtitle1" gutterBottom>
        하단 음수면 dydx short & binance long
      </Typography>

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
