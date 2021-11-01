const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  created: { type: Date, default: new Date() },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
  extension: String,
  file: String,
});

const model = mongoose.model("file", schema);

module.exports = model;
