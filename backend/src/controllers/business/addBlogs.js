const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Blogs = require("../../database/models/Blogs");

async function addBlogs(req, res) {
  try {
    const blogs = trimInputs(req.body);
    console.log(blogs);
    const newBlogs = await Blogs({
      author: req.userData._id,
      title: blogs.title,
      category: blogs.category,
      description: blogs.description,
    }).save();
    console.log(newBlogs);
    res.send({ id: newBlogs._id });
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
