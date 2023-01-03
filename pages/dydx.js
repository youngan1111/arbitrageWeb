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

export default function dYdX() {
  const [markPrice, setMarkPrice] = useState(null)
  const [markPriceTime, setMarkPriceTime] = useState(null)
  const [indexPrice, setIndexPrice] = useState(null)
  const [fundingRate, setFundingRate] = useState(null)
  const [nextFundingRate, setNextFundingRate] = useState(null)
  const [currentPrice, setCurrentPrice] = useState(null)
  const [asks, setAsks] = useState(
    Array.from({ length: 5 }, () => new Object())
  )
  const [bids, setBids] = useState(
    Array.from({ length: 5 }, () => new Object())
  )

  const futures = "BTC-USD"

  useEffect(() => {
    setInterval(async () => {
      const { data } = await axios.get("https://api.dydx.exchange/v3/markets", {
        params: {
          market: futures,
        },
      })
      setMarkPrice(data.markets[futures].oraclePrice)
      setMarkPriceTime(new Date().getTime())
      setIndexPrice(data.markets[futures].indexPrice)
      setFundingRate(data.markets[futures].nextFundingRate)
      setNextFundingRate(data.markets[futures].nextFundingAt)
    }, 1000)

    setInterval(async () => {
      const { data } = await axios.get(
        "https://api.dydx.exchange/v3/orderbook/BTC-USD"
      )
      setAsks(data.asks.slice(undefined, 5))
      setBids(data.bids.slice(undefined, 5))
    }, 1000)
  }, [])

  return (
    <>
      <Header path="/dydx" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Mark Price 1초
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell align="right">Mark Price Time</TableCell>
                <TableCell align="right">Mark Price ($)</TableCell>
                <TableCell align="right">Index Price ($)</TableCell>
                <TableCell align="right">
                  Mark Price – Index Price ($)
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
                  {new Date(markPriceTime).toLocaleString()}
                </TableCell>
                <TableCell align="right">{markPrice}</TableCell>
                <TableCell align="right">{indexPrice}</TableCell>
                <TableCell align="right">{markPrice - indexPrice}</TableCell>
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
        {new Date(markPriceTime).toLocaleString()}
      </Typography>

      <Typography
        sx={{ ml: 40, mt: 1, mb: -2 }}
        variant="h6"
        gutterBottom
        // style={{ color: bids[0][0] == currentPrice ? "red" : "blue" }}
      >
        체결가: {currentPrice}
      </Typography>

      <Grid container>
        <Paper elevation={1} sx={{ m: 3, width: 1 / 4 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                      {bid.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Paper elevation={1} sx={{ m: 3, width: 1 / 4 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
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
                      {ask.price}
                    </TableCell>
                    <TableCell align="right">{ask.size}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  )
}
