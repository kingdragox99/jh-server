const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  desc: {
    required: true,
    type: String,
  },
  type: {
    required: true,
    type: String,
  },
  img: {
    data: String,
    contentType: String,
  },
});

module.exports = mongoose.model("Data", dataSchema);
