import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://radiant-atoll-24356.herokuapp.com/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return <div>Fetch</div>;
}

export default Fetch;
