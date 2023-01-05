import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import Paper from "@mui/material/Paper"
import zoomPlugin from "chartjs-plugin-zoom"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
)

export default function BarChart({ chartData, chartLabel }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          drag: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
  }

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: "BINANCE Bid1 - dYdX Bid1",
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  }

  return (
    <Paper elevation={1} sx={{ m: 3 }}>
      <Bar options={options} data={data} />
    </Paper>
  )
}
