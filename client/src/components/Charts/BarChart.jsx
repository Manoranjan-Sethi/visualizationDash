import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ BarData }) {
  return (
    <div style={{ width: "700px" }}>
      <Bar data={BarData} />
    </div>
  );
}

export default BarChart;
