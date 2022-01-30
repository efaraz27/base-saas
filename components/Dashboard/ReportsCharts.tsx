import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Paper } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ReportsCharts() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  // const data = (canvas: any) => {
  //   const ctx = canvas.getContext("2d");
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 0);
  //   gradient.addColorStop(0, 'rgba(91,196,255,1)');
  //   gradient.addColorStop(1, 'rgba(255,91,239,1)');
  //   return {
  //     labels,
  //     datasets: [
  //       {
  //         fill:'start',
  //         backgroundColor: gradient, // Put the gradient here as a fill color
  //         borderColor: "#ff6c23",
  //         borderWidth: 2,
  //         pointColor: "#fff",
  //         pointStrokeColor: "#ff6c23",
  //         pointHighlightFill: "#fff",
  //         pointHighlightStroke: "#ff6c23",
  //         data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, -24.1, 20.0, -18.4, 19.1, 17.4]
  //       }
  //     ]
  //   }
  // }
  const data = {
    labels,
    datasets: [
      {
        data: [100, 200, 300, 400, 500, 400, 300, 200, 100],
        borderColor: "rgba(68, 44, 46, 1)",
        backgroundColor: "rgba(255,255,255,1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
  };
  return (
    <Box sx={{
      "& > :not(style)": {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      },
    }}>
      <Paper elevation={24}
        sx={{
          backgroundColor: "secondary.main",
          alignItems: "center",
        }}>
        <div style={{ marginLeft: '30px', marginTop: '30px', fontSize: '18px', fontWeight: '700' }}>Reports</div>
        <div style={{ padding: '30px' }}>
          <Line options={options} data={data} />
        </div>
      </Paper>
    </Box>
  );
}
