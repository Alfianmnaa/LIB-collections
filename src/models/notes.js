const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Notes = new Schema(
  {
    image: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notes", Notes);
