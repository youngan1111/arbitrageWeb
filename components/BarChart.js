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
import annotationPlugin from "chartjs-plugin-annotation"
import getDateRange from "../utils/getDatesStartToLast"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
  annotationPlugin
)

export default function BarChart({ chartData, chartLabel, topLabel }) {
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
      annotation: {
        annotations: getDateRange(
          "2023-01-07",
          new Date().toISOString().slice(0, 10)
        ).map((ele) => {
          let temp = {
            type: "line",
            borderColor: "black",
            borderWidth: 1,
            label: {
              backgroundColor: "navy",
              content: `${ele} 00:00`,
              display: true,
            },
            scaleID: "x",
            value: `${ele} 00:00`,
          }
          return temp
        }),
      },
    },
  }

  const data = {
    labels: chartLabel,
    datasets: [
      {
        label: topLabel,
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
