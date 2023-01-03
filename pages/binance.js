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
import thousandsSeparator from "../utils/thousandsSeparator"

export default function Binance() {
  const [markPrice, setMarkPrice] = useState(1)
  const [markPriceTime, setMarkPriceTime] = useState(null)
  const [indexPrice, setIndexPrice] = useState(1)
  const [fundingRate, setFundingRate] = useState(null)
  const [nextFundingRate, setNextFundingRate] = useState(null)
  const [orderBookTime, setOrderBookTime] = useState(null)
  const [currentPrice, setCurrentPrice] = useState(null)
  const [bids, setBids] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 2 }, () => null))
  )
  const [asks, setAsks] = useState(
    Array.from({ length: 10 }, () => Array.from({ length: 2 }, () => null))
  )

  const futures = "btcusdt"

  useEffect(() => {
    const markPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${futures}@markPrice@1s`
    )
    markPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setMarkPrice(json.p)
      setMarkPriceTime(json.E)
      setIndexPrice(json.i)
      setFundingRate(json.r)
      setNextFundingRate(json.T)
    }

    const orderBookEvery100ms = new WebSocket(
      `wss://fstream.binance.com/stream?streams=${futures}@depth10@500ms` // 250ms, 500ms or 100ms
    )
    orderBookEvery100ms.onmessage = ({ data }) => {
      const json = JSON.parse(data).data
      setOrderBookTime(json.E)
      setBids(json.b)
      setAsks(json.a)
    }

    const aggTrade = new WebSocket(
      `wss://fstream.binance.com/ws/${futures}@aggTrade`
    )
    aggTrade.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setCurrentPrice(json.p)
    }
  }, [])

  return (
    <>
      <Header path="/binance" />
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
                  {futures}
                </TableCell>
                <TableCell align="right">
                  {new Date(markPriceTime).toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(markPrice)}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(indexPrice)}
                </TableCell>
                <TableCell align="right">{markPrice - indexPrice}</TableCell>
                <TableCell align="right">
                  {(markPrice / indexPrice - 1) * 100}
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
        {new Date(orderBookTime).toLocaleString()}
      </Typography>

      <Typography
        sx={{ ml: 40, mt: 1, mb: -2 }}
        variant="h6"
        gutterBottom
        style={{ color: bids[0][0] == currentPrice ? "red" : "blue" }}
      >
        체결가: ${thousandsSeparator(currentPrice)}
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
                      {bid[1]}
                    </TableCell>
                    <TableCell align="right" style={{ color: "red" }}>
                      {thousandsSeparator(bid[0])}
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
                      {thousandsSeparator(ask[0])}
                    </TableCell>
                    <TableCell align="right">{ask[1]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>

      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="subtitle1" gutterBottom>
        Mark Price: unrealizaed PnL과 청산을 계산하는 가격
      </Typography>
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="subtitle1" gutterBottom>
        Index Price: 현물 가격이라고 생각해도 된다.
      </Typography>
    </>
  )
}
