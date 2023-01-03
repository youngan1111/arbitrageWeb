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
import Grid from "@mui/material/Grid"
import axios from "axios"
import thousandsSeparator from "../utils/thousandsSeparator"

export default function dYdX() {
  const [oraclePrice, setOraclePrice] = useState(1)
  const [oraclePriceTime, setOraclePriceTime] = useState(null)
  const [indexPrice, setIndexPrice] = useState(1)
  const [fundingRate, setFundingRate] = useState(null)
  const [nextFundingRate, setNextFundingRate] = useState(null)
  const [currentPrice, setCurrentPrice] = useState(null)
  const [asks, setAsks] = useState(
    Array.from({ length: 10 }, () => new Object())
  )
  const [bids, setBids] = useState(
    Array.from({ length: 10 }, () => new Object())
  )

  const futures = "BTC-USD"

  useEffect(() => {
    setInterval(async () => {
      const { data } = await axios.get("https://api.dydx.exchange/v3/markets", {
        params: {
          market: futures,
        },
      })
      setOraclePrice(data.markets[futures].oraclePrice)
      setOraclePriceTime(new Date().getTime())
      setIndexPrice(data.markets[futures].indexPrice)
      setFundingRate(data.markets[futures].nextFundingRate)
      setNextFundingRate(data.markets[futures].nextFundingAt)
    }, 1000)

    setInterval(async () => {
      const { data } = await axios.get(
        "https://api.dydx.exchange/v3/orderbook/BTC-USD"
      )
      setAsks(data.asks.slice(undefined, 10))
      setBids(data.bids.slice(undefined, 10))
    }, 100)
  }, [])

  return (
    <>
      <Header path="/dydx" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Market data 1초
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">Oracle Price Time</TableCell>
                <TableCell align="right">Oracle Price ($)</TableCell>
                <TableCell align="right">Index Price ($)</TableCell>
                <TableCell align="right">
                  Oracle Price – Index Price ($)
                </TableCell>
                <TableCell align="right">
                  Oracle Price / Index Price (%)
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
                  {futures}
                </TableCell>
                <TableCell align="right">
                  {new Date(oraclePriceTime).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(oraclePrice)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(indexPrice)}
                </TableCell>
                <TableCell align="right">{oraclePrice - indexPrice}</TableCell>
                <TableCell align="right">
                  {(oraclePrice / indexPrice - 1) * 100}
                </TableCell>
                <TableCell align="right">{fundingRate}</TableCell>
                <TableCell align="right">
                  {new Date(nextFundingRate).toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography
        sx={{ ml: 3, mt: 1, mb: 2 }}
        variant="h5"
        gutterBottom
        display="inline"
      >
        · 선물 호가창
      </Typography>
      <Typography
        sx={{ ml: 1, mt: 1, mb: 2 }}
        variant="subtitle1"
        gutterBottom
        display="inline"
      >
        {new Date(oraclePriceTime).toLocaleString()}
      </Typography>

      <Typography sx={{ ml: 40, mt: 1, mb: -2 }} variant="h6" gutterBottom>
        체결가: ${thousandsSeparator(asks[0].price)}
      </Typography>

      <Grid container>
        <Paper elevation={1} sx={{ m: 3, width: 1 / 4 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Volume</TableCell>
                  <TableCell align="right">
                    매수호가(최상단 = 가장 높은 값)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bids.map((bid, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {bid.size}
                    </TableCell>
                    <TableCell align="right" style={{ color: "red" }}>
                      {thousandsSeparator(bid.price)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper elevation={1} sx={{ m: 3, width: 1 / 4 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>매도호가(최상단 = 가장 낮은 값)</TableCell>
                  <TableCell align="right">Volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {asks.map((ask, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ color: "blue" }}
                    >
                      {thousandsSeparator(ask.price)}
                    </TableCell>
                    <TableCell align="right">{ask.size}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>

      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="subtitle1" gutterBottom>
        Oracle Price: 청산을 계산하는 가격 Binance의 Mark Price랑 비슷
      </Typography>
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="subtitle1" gutterBottom>
        Index Price: 현물 가격이라고 생각해도 된다.
      </Typography>
    </>
  )
}
