import React, { useEffect } from "react";
import { Chart } from "react-google-charts";

function BarChart({ data }) {
  // useEffect(() => {
  const allData = [
    ["Intensity", "Topics"],
    [...data.map((e) => e.intensity)],
    [...data.map((e) => e.topic)],
  ];
  // }, []);
  return (
    <div>
      <Chart chartType="Bar" data={allData} />
    </div>
  );
}

export default BarChart;
