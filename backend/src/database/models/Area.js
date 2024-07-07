const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AreaSchema = new Schema(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);
