const mongoose = require("mongoose");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Blogs = require("../../database/models/Blogs");
const Category = require("../../database/models/Category");

const { ObjectId } = mongoose.Types;

async function addBlogs(req, res) {
  try {
    const blogs = trimInputs(req.body);
    const author = req.userData._id;
    let { id, ...data } = blogs;
    if (id === "") {
      data = {
        ...data,
        author,
      };
    }
    const filter = id !== "" ? { _id: id } : { _id: new ObjectId() };
    const options = {
      upsert: true,
      returnOriginal: false,
      runValidators: true,
    };

    let oldBlog = null;
    if (id !== "") {
      oldBlog = await Blogs.findById(id);
    }

    if (oldBlog === null) {
      await Category.findByIdAndUpdate(data.category, {
        $inc: { count: 1 },
      });
    } else if (oldBlog.category.toString() !== data.category) {
      await Category.findByIdAndUpdate(data.category, {
        $inc: { count: +1 },
      });
      await Category.findByIdAndUpdate(oldBlog.category.toString(), {
        $inc: { count: -1 },
      });
    }

    const newBlogs = await Blogs.findOneAndUpdate(
      filter,
      { $set: data },
      options
    );

    res.send({
      id: newBlogs._id.toString(),
      title: newBlogs.title,
      category: newBlogs.category,
      description: newBlogs.description,
    });
  } catch (error) {
    console.log(error, "addBusiness");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = addBlogs;
