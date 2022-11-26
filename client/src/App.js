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
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (function getData(data) {
      setLoading(true);
      fetch("https://radiant-atoll-24356.herokuapp.com/data")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
          setTemp(data);
          // console.log(data);
        })
        .catch((err) => console.log(err.message));
    })();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {<BarChart data={data} />}
      <GetData
        data={data}
        setData={setData}
        temp={temp}
        setTemp={setTemp}
        loading={loading}
      />
      {/* <ShowData /> */}
      {/* <Fetch /> */}

      {/* <LineChart LineData={intense} />
      <PieChart PieData={intense} /> */}
    </div>
  );
}

export default App;
