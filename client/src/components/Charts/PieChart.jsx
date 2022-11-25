import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ PieData }) {
  return (
    <div style={{ width: "700px" }}>
      <Pie data={PieData} />
    </div>
  );
}

export default PieChart;
