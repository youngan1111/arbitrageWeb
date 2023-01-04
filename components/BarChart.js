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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart({ chartData, chartLabel }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
