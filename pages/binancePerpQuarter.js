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

const ComponentsWithNoSSR = dynamic(() => import("../components/BarChart"), {
  ssr: false,
})

export default function BinancePerpQuarter() {
  const [perpMarkPrice, setPerpMarkPrice] = useState(1)
  const [perpIndexPrice, setPerpIndexPrice] = useState(1)
  const [perpFundingRate, setPerpFundingRate] = useState(null)
  const [perpBid1, setPerpBid1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [perpAsk1, setPerpAsk1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [quarterMarkPrice, setQuarterMarkPrice] = useState(1)
  const [quarterIndexPrice, setQuarterIndexPrice] = useState(1)
  const [quarterFundingRate, setQuarterFundingRate] = useState(null)
  const [quarterBid1, setQuarterBid1] = useState(
    Array.from({ length: 2 }, () => null)
  )
  const [quarterAsk1, setQuarterAsk1] = useState(
    Array.from({ length: 2 }, () => null)
  )

  const [chartData, setChartData] = useState(null)
  const [chartLabel, setChartLabel] = useState(null)
  const perpBinance = "btcusdt"
  const quarterBinance = "btcusdt_230331"

  useEffect(() => {
    // for bar chart
    const getData = async () => {
      const response = await axios.get("/api/binancePerpQuarter")
      setChartData(
        response.data.rows.map((ele) => ele.quarterBid1 - ele.perpBid1)
      )
      setChartLabel(response.data.rows.map((ele) => ele.createdTime))
    }
    getData()

    // perp binance
    const perpMarkPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${perpBinance}@markPrice@1s`
    )
    perpMarkPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setPerpMarkPrice(json.p)
      setPerpIndexPrice(json.i)
      setPerpFundingRate(json.r)
    }
    const perpOrderBookEvery500ms = new WebSocket(
      `wss://fstream.binance.com/stream?streams=${perpBinance}@depth10@500ms` // 250ms, 500ms or 100ms
    )
    perpOrderBookEvery500ms.onmessage = ({ data }) => {
      const json = JSON.parse(data).data
      setPerpBid1(json.b[0])
      setPerpAsk1(json.a[0])
    }

    // quarter binance
    const quarterMarkPriceEvery1sec = new WebSocket(
      `wss://fstream.binance.com/ws/${quarterBinance}@markPrice@1s`
    )
    quarterMarkPriceEvery1sec.onmessage = ({ data }) => {
      const json = JSON.parse(data)
      setQuarterMarkPrice(json.p)
      setQuarterIndexPrice(json.i)
      setQuarterFundingRate(json.r)
    }
    const quarterOrderBookEvery500ms = new WebSocket(
      `wss://fstream.binance.com/stream?streams=${quarterBinance}@depth10@500ms` // 250ms, 500ms or 100ms
    )
    quarterOrderBookEvery500ms.onmessage = ({ data }) => {
      const json = JSON.parse(data).data
      setQuarterBid1(json.b[0])
      setQuarterAsk1(json.a[0])
    }
  }, [])

  return (
    <>
      <Header path="/binancePerpQuarter" />
      <Typography sx={{ ml: 3, mt: 1, mb: 2 }} variant="h5" gutterBottom>
        · Analyze
      </Typography>
      <Paper elevation={1} sx={{ m: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={"5%"}>상품</TableCell>
                <TableCell width={"5%"}>Symbol</TableCell>
                <TableCell align="right">매수호가/수량 ($/BTC)</TableCell>
                <TableCell align="right">매도호가/수량 ($/BTC)</TableCell>
                <TableCell align="right">청산가 ($)</TableCell>
                <TableCell align="right">매수호가 - Index Price ($)</TableCell>
                <TableCell align="right">Funding Rate (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Perpetual
                </TableCell>
                <TableCell component="th" scope="row">
                  {perpBinance}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(perpBid1[0])} / {perpBid1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(perpAsk1[0])} / {perpAsk1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(perpMarkPrice)}
                </TableCell>
                <TableCell align="right">
                  {(perpBid1[0] - perpIndexPrice).toFixed(5)}
                </TableCell>
                <TableCell align="right">{perpFundingRate * 100}</TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Quarterly
                </TableCell>
                <TableCell component="th" scope="row">
                  {quarterBinance}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(quarterBid1[0])} / {quarterBid1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(quarterAsk1[0])} / {quarterAsk1[1]}
                </TableCell>
                <TableCell align="right">
                  {thousandsSeparator(quarterMarkPrice)}
                </TableCell>
                <TableCell align="right">
                  {(quarterBid1[0] - quarterIndexPrice).toFixed(5)}
                </TableCell>
                <TableCell align="right">{quarterFundingRate * 100}</TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  비교
                </TableCell>
                <TableCell align="right" colSpan={2}>
                  {perpBid1[0] > quarterBid1[0]
                    ? `무기한 선물이 ${(
                        ((perpBid1[0] - quarterBid1[0]) / quarterBid1[0]) *
                        100
                      ).toFixed(3)}% ($${perpBid1[0] - quarterBid1[0]}) 높다`
                    : `만기 선물이 ${(
                        ((quarterBid1[0] - perpBid1[0]) / perpBid1[0]) *
                        100
                      ).toFixed(3)}% ($${(quarterBid1[0] - perpBid1[0]).toFixed(
                        2
                      )}) 높다`}
                </TableCell>
                <TableCell align="right">
                  {perpAsk1[0] > quarterAsk1[0]
                    ? `무기한 선물이 ${(
                        ((perpAsk1[0] - quarterAsk1[0]) / quarterAsk1[0]) *
                        100
                      ).toFixed(3)}% ($${(perpAsk1[0] - quarterAsk1[0]).toFixed(
                        2
                      )}) 높다`
                    : `만기 선물이 ${(
                        ((quarterAsk1[0] - perpAsk1[0]) / perpAsk1[0]) *
                        100
                      ).toFixed(3)}% ($${(quarterAsk1[0] - perpAsk1[0]).toFixed(
                        2
                      )}) 높다`}
                </TableCell>
                <TableCell align="right">
                  {perpMarkPrice > quarterMarkPrice
                    ? `무기한 선물이 ${(
                        ((perpMarkPrice - quarterMarkPrice) /
                          quarterMarkPrice) *
                        100
                      ).toFixed(3)}% ($${(
                        perpMarkPrice - quarterMarkPrice
                      ).toFixed(2)}) 높다`
                    : `만기 선물이 ${(
                        ((quarterMarkPrice - perpMarkPrice) / perpMarkPrice) *
                        100
                      ).toFixed(3)}% ($${(
                        quarterMarkPrice - perpMarkPrice
                      ).toFixed(2)}) 높다`}
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Typography sx={{ ml: 3, mt: 1 }} variant="subtitle1" gutterBottom>
        바이낸스 USDT 무기한/만기 선물 수수료: 0.02%
      </Typography>

      <ComponentsWithNoSSR
        chartData={chartData}
        chartLabel={chartLabel}
        topLabel={"만기선물 - 무기한선물 ($)"}
      />
    </>
  )
}
