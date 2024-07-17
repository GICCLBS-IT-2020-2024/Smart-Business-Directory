const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AreaSchema = new Schema(
  {
    label: { type: String, unique: true },
    count: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Area", AreaSchema);
