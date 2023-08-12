const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  smallUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("URL", urlSchema);
