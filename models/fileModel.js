const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  created: { type: Date, default: new Date() },
  user: { type: mongoose.Types.ObjectId, ref: "users" },
});

const model = mongoose.model("files", schema);

module.exports = model;