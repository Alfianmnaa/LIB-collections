const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Files = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    drive: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Files", Files);
