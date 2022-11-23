const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.mango)
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () => {
  console.log("listening on port 8080");
});
