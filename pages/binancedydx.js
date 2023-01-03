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

export default function Binancedydx() {
  const [binanceMarkPrice, setBinanceMarkPrice] = useState(1)
  const [binanceMarkPriceTime, setBinanceMarkPriceTime] = useState(null)
  const [binanceIndexPrice, setBinanceIndexPrice] = useState(1)
  const [binanceFundingRate, setBinanceFundingRate] = useState(null)
  const [binanceNextFundingRate, setBinanceNextFundingRate] = useState(null)

  const [dydxMarkPrice, setDydxMarkPrice] = useState(1)
  const [dydxMarkPriceTime, setDydxMarkPriceTime] = useState(null)
  const [dydxIndexPrice, setDydxIndexPrice] = useState(1)
  const [dydxFundingRate, setDydxFundingRate] = useState(null)
  const [dydxNextFundingRate, setDydxNextFundingRate] = useState(null)

  const futuresBinance = "btcusdt"
  const futuresDydx = "BTC-USD"

  useEffect(() => {
    const markPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${futuresBinance}@markPrice@1s`
    )
    markPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setBinanceMarkPrice(json.p)
      setBinanceMarkPriceTime(json.E)
      setBinanceIndexPrice(json.i)
      setBinanceFundingRate(json.r)
      setBinanceNextFundingRate(json.T)
    }

    setInterval(async () => {
      const { data } = await axios.get("https://api.dydx.exchange/v3/markets", {
        params: {
          market: futuresDydx,
        },
      })
      setDydxMarkPrice(data.markets[futuresDydx].oraclePrice)
      setDydxMarkPriceTime(new Date().getTime())
      setDydxIndexPrice(data.markets[futuresDydx].indexPrice)
      setDydxFundingRate(data.markets[futuresDydx].nextFundingRate)
      setDydxNextFundingRate(data.markets[futuresDydx].nextFundingAt)
    }, 1000)
  }, [])

  return (
    <>
      <Header path="/binancedydx" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · 분석
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Exchange</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">Mark Price Time</TableCell>
                <TableCell align="right">Mark Price ($)</TableCell>
                <TableCell align="right">Index Price ($)</TableCell>
                <TableCell align="right">
                  Mark Price – Index Price ($)
                </TableCell>
                <TableCell align="right">
                  Mark Price / Index Price (%)
                </TableCell>
                <TableCell align="right">Funding Rate</TableCell>
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
                  {new Date(binanceMarkPriceTime).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceMarkPrice)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(binanceIndexPrice)}
                </TableCell>
                <TableCell align="right">
                  {binanceMarkPrice - binanceIndexPrice}
                </TableCell>
                <TableCell align="right">
                  {(binanceMarkPrice / binanceIndexPrice - 1) * 100}
                </TableCell>
                <TableCell align="right">{binanceFundingRate}</TableCell>
                <TableCell align="right">
                  {new Date(binanceNextFundingRate).toLocaleString()}
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
                  {new Date(dydxMarkPriceTime).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxMarkPrice)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(dydxIndexPrice)}
                </TableCell>
                <TableCell align="right">
                  {dydxMarkPrice - dydxIndexPrice}
                </TableCell>
                <TableCell align="right">
                  {(dydxMarkPrice / dydxIndexPrice - 1) * 100}
                </TableCell>
                <TableCell align="right">{dydxFundingRate}</TableCell>
                <TableCell align="right">
                  {new Date(dydxNextFundingRate).toLocaleString()}
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  비교
                </TableCell>
                <TableCell align="right" colSpan={3}>
                  {binanceMarkPrice > dydxMarkPrice
                    ? `BINANCE가 $${(binanceMarkPrice - dydxMarkPrice).toFixed(
                        4
                      )} 만큼 높다`
                    : `dYdX가 $${(dydxMarkPrice - binanceMarkPrice).toFixed(
                        4
                      )} 만큼 높다`}
                </TableCell>
                <TableCell align="left" colSpan={2}>
                  {binanceIndexPrice > dydxIndexPrice
                    ? `BINANCE가 $${(
                        binanceIndexPrice - dydxIndexPrice
                      ).toFixed(4)} 만큼 높다`
                    : `dYdX가 $${(dydxIndexPrice - binanceIndexPrice).toFixed(
                        4
                      )} 만큼 높다`}
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
