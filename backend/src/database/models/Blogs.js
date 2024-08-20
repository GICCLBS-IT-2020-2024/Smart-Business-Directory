const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true, minlength: 3, maxlength: 75 },
    description: {
      type: String,
      minlength: 50,
      maxlength: 500,
    },
    imageUrl: { type: String },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    interests: {},
    skills: {},
    MinAge: {},
    businessTitle: {},
    MinBudget: {},
    blog: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
