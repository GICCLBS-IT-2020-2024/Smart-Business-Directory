const mongoose = require("mongoose");
const errorHandler = require("../../helpers/errorHandler");
const Blogs = require("../../database/models/Blogs");
const Category = require("../../database/models/Category");
const deleteFile = require("../../helpers/deleteFile");

async function addBlogs(req, res) {
  try {
    const { blogId } = req.params;

    const deletedBlog = await Blogs.findByIdAndDelete(blogId);

    if (deletedBlog !== null) {
      await Category.findByIdAndUpdate(deletedBlog.category.toString(), {
        $inc: { count: -1 },
      });
      if (deletedBlog.imageUrl) {
        deleteFile(deletedBlog.imageUrl);
      }
    }

    res.send({
      ok: true,
    });
  } catch (error) {
    console.log(error, "removeBusiness");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = addBlogs;
