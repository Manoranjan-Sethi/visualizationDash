import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  // const [intense, setIntense] = useState({
  //   labels: chartData.map((e) => e.intensity && e.intensity),
  //   datasets: [
  //     {
  //       label: "Intensity",
  //       data: chartData.map((e) => e.topic && e.topic),
  //       backgroundColor: [
  //         "rgba(75,192,195,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 1.5,
  //     },
  //   ],
  // });
  return (
    <div style={{ width: "700px" }}>
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
