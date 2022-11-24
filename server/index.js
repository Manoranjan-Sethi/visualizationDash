const express = require("express");
const mongoose = require("mongoose");
const DataModel = require("./models/data");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.mango)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err.message));

app.get("/data", async (req, res) => {
  const allData = await DataModel.find();
  res.send(allData);
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 8080");
});
