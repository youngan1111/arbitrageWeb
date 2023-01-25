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
import Grid from "@mui/material/Grid"

export default function arbitrageTestnet() {
  const [dydxPosition, setDydxPosition] = useState([])
  const [binancePosition, setBinancePosition] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/getPosition")
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
        · Arbitrage testnet
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ ml: 3, mb: 1 }} variant="subtitle1">
            dYdX
          </Typography>
          <Paper sx={{ ml: 3 }}>
            <TableContainer>
              <Table sx={{ minWidth: 500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Side</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
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
                          colSpan={3}
                        >
                          {ele.side}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow
                        key={ele.createdTime}
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
              <Table sx={{ minWidth: 500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Side</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
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
                          colSpan={3}
                        >
                          {ele.side}
                        </TableCell>
                        <TableCell align="right">
                          {new Date(Number(ele.createdTime)).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow
                        key={ele.createdTime}
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
