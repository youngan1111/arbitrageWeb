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
import roundTwo from "../utils/roundTwo"
import Grid from "@mui/material/Grid"

export default function arbitrageTestnet() {
  const [dydxPosition, setDydxPosition] = useState([])
  const [binancePosition, setBinancePosition] = useState([])
  const [dydxBalanceDiff, setDydxBalanceDiff] = useState(0)
  const [dydxTotalPNL, setDydxTotalPNL] = useState(0)
  const [binanceBalanceDiff, setBinanceBalanceDiff] = useState(0)
  const [binanceTotalPNL, setBinanceTotalPNL] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/getPosition")

      let temp = { price: 0, size: 0 }
      let dydxPNL = 0
      let binancePNL = 0

      setDydxBalanceDiff(
        roundTwo(data.dydx[0].balance - data.dydx[data.dydx.length - 2].balance)
      )
      setBinanceBalanceDiff(
        roundTwo(
          data.binance[0].balance -
            data.binance[data.binance.length - 2].balance
        )
      )

      // dydx
      for (let i = data.dydx.length - 2; i > -1; i--) {
        if (netDydxQuantity === 0) data.dydx[i].pnl = "진입"

        data.dydx[i].side == "SELL"
          ? (netDydxQuantity = roundTwo(
              netDydxQuantity - Number(data.dydx[i].avgQuantity)
            ))
          : (netDydxQuantity = roundTwo(
              netDydxQuantity + Number(data.dydx[i].avgQuantity)
            ))

        // close position
        if (netDydxQuantity === 0) {
          if (data.dydx[i].side === "SELL") {
            data.dydx[i].pnl = roundTwo(
              (Number(data.dydx[i].avgPrice) - temp.price) * temp.size
            )
            temp.price = 0
            temp.size = 0
            dydxPNL = roundTwo(dydxPNL + data.dydx[i].pnl)
          } else {
            data.dydx[i].pnl = roundTwo(
              (temp.price - Number(data.dydx[i].avgPrice)) * temp.size
            )
            temp.price = 0
            temp.size = 0
            dydxPNL = roundTwo(dydxPNL + data.dydx[i].pnl)
          }
        } else {
          temp.price = roundTwo(
            (Number(data.dydx[i].avgPrice) * Number(data.dydx[i].avgQuantity) +
              temp.price * temp.size) /
              (Number(data.dydx[i].avgQuantity) + temp.size)
          )
          temp.size = roundTwo(temp.size + Number(data.dydx[i].avgQuantity))
        }
      }
      setDydxTotalPNL(dydxPNL)

      for (let i = data.binance.length - 2; i > -1; i--) {
        if (netBinanceQuantity === 0) data.binance[i].pnl = "진입"

        data.binance[i].side == "SELL"
          ? (netBinanceQuantity = roundTwo(
              netBinanceQuantity - Number(data.binance[i].avgQuantity)
            ))
          : (netBinanceQuantity = roundTwo(
              netBinanceQuantity + Number(data.binance[i].avgQuantity)
            ))

        // close position
        if (netBinanceQuantity === 0) {
          if (data.binance[i].side === "SELL") {
            data.binance[i].pnl = roundTwo(
              (Number(data.binance[i].avgPrice) - temp.price) * temp.size
            )
            temp.price = 0
            temp.size = 0
            binancePNL = roundTwo(binancePNL + data.binance[i].pnl)
          } else {
            data.binance[i].pnl = roundTwo(
              (temp.price - Number(data.binance[i].avgPrice)) * temp.size
            )
            temp.price = 0
            temp.size = 0
            binancePNL = roundTwo(binancePNL + data.binance[i].pnl)
          }
        } else {
          temp.price = roundTwo(
            (Number(data.binance[i].avgPrice) *
              Number(data.binance[i].avgQuantity) +
              temp.price * temp.size) /
              (Number(data.binance[i].avgQuantity) + temp.size)
          )
          temp.size = roundTwo(temp.size + Number(data.binance[i].avgQuantity))
        }
      }
      setBinanceTotalPNL(binancePNL)

      setDydxPosition(data.dydx)
      setBinancePosition(data.binance)
    }
    getData()
  }, [])

  let netDydxQuantity = 0
  let netBinanceQuantity = 0

  return (
    <>
      <Header path="/arbitrageTestnet" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Trade History
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography sx={{ ml: 3, mb: 1 }} variant="subtitle1">
            dYdX
          </Typography>
          <Paper sx={{ ml: 3 }}>
            <TableContainer>
              <Table sx={{ minWidth: 500 }} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Side</TableCell>
                    <TableCell>Price ($)</TableCell>
                    <TableCell align="right">Size (BTC)</TableCell>
                    <TableCell align="right">Balance ($)</TableCell>
                    <TableCell align="right">PNL ($)</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={6}
                    >
                      Balance diff: {dydxBalanceDiff > 0 ? "▲" : "▼"}
                      {thousandsSeparator(dydxBalanceDiff)}
                      &nbsp;&nbsp;&nbsp;Total PNL:&nbsp;
                      {dydxTotalPNL > 0 ? "▲" : "▼"}
                      {dydxTotalPNL}
                    </TableCell>
                  </TableRow>

                  {dydxPosition.map((ele) =>
                    ele.side === "START" ? (
                      <TableRow
                        key={ele.createdTime}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          colSpan={5}
                        >
                          {ele.side}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow
                        key={ele.createdTime + ele.avgQuantity}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {ele.side}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {thousandsSeparator(Number(ele.avgPrice))}
                        </TableCell>
                        <TableCell align="right">
                          {Number(ele.avgQuantity)}
                        </TableCell>
                        <TableCell align="right">
                          {thousandsSeparator(Number(ele.balance).toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color:
                              ele.pnl > 0
                                ? "red"
                                : ele.pnl == "진입"
                                ? "black"
                                : "blue",
                          }}
                        >
                          {ele.pnl}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ mb: 1 }} variant="subtitle1">
            Binance
          </Typography>
          <Paper sx={{ mr: 3 }}>
            <TableContainer>
              <Table sx={{ minWidth: 500 }} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Side</TableCell>
                    <TableCell>Price ($)</TableCell>
                    <TableCell align="right">Size (BTC)</TableCell>
                    <TableCell align="right">Balance ($)</TableCell>
                    <TableCell align="right">PNL ($)</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={6}
                    >
                      Binance balance diff: {binanceBalanceDiff > 0 ? "▲" : "▼"}
                      {thousandsSeparator(binanceBalanceDiff)}
                      &nbsp;&nbsp;&nbsp;Total PNL:&nbsp;
                      {binanceTotalPNL > 0 ? "▲" : "▼"}
                      {binanceTotalPNL}
                    </TableCell>
                  </TableRow>

                  {binancePosition.map((ele) =>
                    ele.side === "START" ? (
                      <TableRow
                        key={ele.createdTime}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          align="center"
                          colSpan={5}
                        >
                          {ele.side}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow
                        key={ele.createdTime + ele.avgQuantity}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {ele.side}
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {thousandsSeparator(Number(ele.avgPrice))}
                        </TableCell>
                        <TableCell align="right">
                          {Number(ele.avgQuantity)}
                        </TableCell>
                        <TableCell align="right">
                          {thousandsSeparator(Number(ele.balance).toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color:
                              ele.pnl > 0
                                ? "red"
                                : ele.pnl == "진입"
                                ? "black"
                                : "blue",
                          }}
                        >
                          {ele.pnl}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
