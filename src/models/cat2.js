const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Categoryfiles = new Schema({
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Categoryfiles", Categoryfiles);
