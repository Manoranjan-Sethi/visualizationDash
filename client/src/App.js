import "./App.css";
import React, { useEffect, useState } from "react";
import BarChart from "./components/Charts/BarChart";
// import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar/Navbar";

import PieChart from "./components/Charts/PieChart";
import LineChart from "./components/Charts/LineChart";
import ShowData from "./components/Table/ShowData";
import GetData from "./components/Table/GetData";
// import { users } from "./bd.js";

function App() {
  const [adata, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://radiant-atoll-24356.herokuapp.com/data");
      let data = await res.json();
      setData(data);
      // console.log(data);
    }
    getData();
  }, []);

  const [intense, setIntense] = useState({
    labels: adata.map((e) => e.intensity && e.intensity),
    datasets: [
      {
        label: "Intensity",
        data: adata.map((e) => e.topic && e.topic),
        backgroundColor: [
          "rgba(75,192,195,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1.5,
      },
    ],
  });

  return (
    <div className="App">
      <Navbar />
      <GetData />
      {/* <ShowData /> */}
      {/* <Fetch /> */}

      {/* <BarChart chartData={intense} /> */}
      {/* <LineChart LineData={intense} />
      <PieChart PieData={intense} /> */}
    </div>
  );
}

export default App;
