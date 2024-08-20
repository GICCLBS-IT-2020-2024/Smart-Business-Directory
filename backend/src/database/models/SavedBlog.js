const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SavedBlogSchema = new Schema(
  {
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    savedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedBlog", SavedBlogSchema);
