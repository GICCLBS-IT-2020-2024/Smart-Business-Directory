const mongoose = require("mongoose");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Blogs = require("../../database/models/Blogs");

const { ObjectId } = mongoose.Types;

async function addBlogs(req, res) {
  try {
    const blogs = trimInputs(req.body);
    const { id, ...data } = blogs;
    const filter = id !== "" ? { _id: id } : { _id: new ObjectId() };
    const options = {
      upsert: true,
      returnOriginal: false,
      runValidators: true,
    };
    const newBlogs = await Blogs.findOneAndUpdate(
      filter,
      { $set: data },
      options
    );
    console.log(newBlogs, filter);
    res.send({
      id: newBlogs._id.toString(),
      title: newBlogs.title,
      category: newBlogs.category,
      description: newBlogs.description,
    });
  } catch (error) {
    console.log(error, "addBusiness");
    const errRes = customErrorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

function customErrorHandler(error) {
  try {
    return errorHandler(error);
  } catch (error) {
    return errorHandler(error);
  }
}

module.exports = addBlogs;
