const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", Category);
