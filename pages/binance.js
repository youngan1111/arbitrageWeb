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

export default function MySchedule() {
  const [markPrice, setMarkPrice] = useState(null)
  const [markPriceTime, setMarkPriceTime] = useState(null)
  const [indexPrice, setIndexPrice] = useState(null)
  const [fundingRate, setFundingRate] = useState(null)
  const [nextFundingRate, setNextFundingRate] = useState(null)

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

    // const orderBookEvery100ms = new WebSocket(
    //   `wss://fstream.binance.com/stream?streams=${futures}@depth5@100ms`
    // )
    // orderBookEvery100ms.onmessage = ({ data }) => {
    //   const json = JSON.parse(data)
    //   console.log(json.E)
    //   setMarkPrice(json.E)
    // }
  }, [])

  return (
    <>
      <Header />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · BINANCE
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell align="right">Mark Price</TableCell>
              <TableCell align="right">Mark Price Time</TableCell>
              <TableCell align="right">Index Price</TableCell>
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
              <TableCell align="right">{markPrice}</TableCell>
              <TableCell align="right">{markPriceTime}</TableCell>
              <TableCell align="right">{indexPrice}</TableCell>
              <TableCell align="right">{fundingRate}</TableCell>
              <TableCell align="right">{nextFundingRate}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
