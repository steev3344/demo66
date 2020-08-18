const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  name: { type: String, required: true },
  mobile_number: { type: Number, required: true },
  type: { type: String, required: true },
  status: { type: Boolean, required: true },
});

module.exports = mongoose.model("Employee", employee);
