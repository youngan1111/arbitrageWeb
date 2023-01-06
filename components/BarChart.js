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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
  // annotationPlugin
)

// const annotation1 = {
//   type: "line",
//   borderColor: "black",
//   borderWidth: 1,
//   label: {
//     backgroundColor: "navy",
//     content: "Label",
//     display: true,
//   },
//   scaleID: "x",
//   value: "01/05 12:00",
// }
// const annotation2 = {
//   type: "line",
//   borderColor: "black",
//   borderWidth: 1,
//   label: {
//     backgroundColor: "navy",
//     content: "Label",
//     display: true,
//   },
//   scaleID: "x",
//   value: "01/06 00:00",
// }
// const annotations = { annotation1, annotation2 }

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
      // annotation: {
      //   annotations,
      // },
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
