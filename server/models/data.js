const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: String,
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
});

const DataModel = mongoose.model("data", dataSchema);

module.exports = DataModel;
