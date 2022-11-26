import React, { useState, useEffect } from "react";
import ShowData from "./ShowData";
import "./GetData.css";

export default function GetData({ data, setData, temp, setTemp, loading }) {
  function sortIntensity(e) {
    let value = e.target.value;
    if (value === "lh") {
      let sortData = data.filter((item) => item.intensity && true);
      let sorted = sortData.sort((a, b) => a.intensity - b.intensity);
      setData(sorted);
    }
    if (value === "hl") {
      let sortData = [...data];
      let sorted = sortData.sort((a, b) => b.intensity - a.intensity);
      setData(sorted);
    }
    if (value === "Default") {
      window.location.reload(false);
    }
  }

  function sortLikelihood(e) {
    let value = e.target.value;
    if (value === "lh") {
      let sortData = data.filter((item) => item.likelihood && true);
      let sorted = sortData.sort((a, b) => a.likelihood - b.likelihood);
      setData(sorted);
    }
    if (value === "hl") {
      let sortData = [...data];
      let sorted = sortData.sort((a, b) => b.likelihood - a.likelihood);
      setData(sorted);
    }
    if (value === "Default") {
      window.location.reload(false);
    }
  }

  function handleTopics(e) {
    let topics = e.target.value;
    if (topics === "Default") {
      setData(temp);
    } else {
      let newData = temp.filter((item) => item.topic === topics);
      setData(newData);
    }
  }

  function handleSector(e) {
    let sectors = e.target.value;
    if (sectors === "Default") {
      setData(temp);
    } else {
      let newData = temp.filter((item) => item.sector === sectors);
      setData(newData);
    }
  }

  function handleRegion(e) {
    let regions = e.target.value;
    if (regions === "Default") {
      setData(temp);
    } else {
      let newData = temp.filter((item) => item.region === regions);
      setData(newData);
    }
  }

  function handlePestle(e) {
    let pestles = e.target.value;
    if (pestles === "Default") {
      setData(temp);
    } else {
      let newData = temp.filter((item) => item.pestle === pestles);
      setData(newData);
    }
  }

  return (
    <div>
      <div className="flex">
        <div>
          <h3>Filter By :-</h3>
        </div>
        <div>
          <label>Topics</label>
          <select onChange={handleTopics}>
            <option value="Default">Default</option>
            <option value="gas">Gas</option>
            <option value="oil">Oil</option>
            <option value="export">Export</option>
            <option value="market">Market</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>
        <div>
          <label>Sector</label>
          <select onChange={handleSector}>
            <option value="Default">Default</option>
            <option value="Energy">Energy</option>
            <option value="Financial services">Financial services</option>
            <option value="Retail">Retail</option>
            <option value="Food & agriculture">Food & agriculture</option>
          </select>
        </div>
        <div>
          <label>Region</label>
          <select onChange={handleRegion}>
            <option value="Default">Default</option>
            <option value="World">World</option>
            <option value="Western Asia">Western Asia</option>
            <option value="Northern America">Northern America</option>
            <option value="Eastern Europe">Eastern Europe</option>
            <option value="South America">South America</option>
          </select>
        </div>
        <div>
          <label>Pestle</label>
          <select onChange={handlePestle}>
            <option value="Default">Default</option>
            <option value="Industries">Industries</option>
            <option value="Environmental">Environmental</option>
            <option value="Economic">Economic</option>
            <option value="Technological">Technological</option>
            <option value="Political">Political</option>
          </select>
        </div>
        <div>
          <label>Intensity</label>
          <select onChange={sortIntensity}>
            <option value="Default">Default</option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
        <div>
          <label>Likelihood</label>
          <select onChange={sortLikelihood}>
            <option value="Default">Default</option>
            <option value="lh">Low to High</option>
            <option value="hl">High to Low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="head">
          <h2>Loading....</h2>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Topic</th>
              <th>Added</th>
              <th>Country</th>
              <th>Insight</th>
              <th>Intensity</th>
              <th>Likelihood</th>
              <th>Pestle</th>
              <th>Published</th>
              <th>Region</th>
              <th>Relevance</th>
              <th>Sector</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((res) => {
              return <ShowData key={res._id} res={res} />;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
