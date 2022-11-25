import "./App.css";
import React, { useEffect, useState } from "react";
import BarChart from "./components/Charts/BarChart";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState([]);
  const [intense, setIntense] = useState({
    labels: data.map((e) => e.intensity && e.intensity),
    datasets: [
      {
        label: "Intensity",
        data: data.map((e) => e.topic && e.topic),
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

  useEffect(() => {
    fetch("https://radiant-atoll-24356.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIntense(data);
        // console.log(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Fetch /> */}

      <BarChart BarData={intense} />
    </div>
  );
}

export default App;
