const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Blogs = require("../../database/models/Blogs");

async function addBlogs(req, res) {
  try {
    const blogs = trimInputs(req.body);
    const { id, blog } = blogs;
    const newBlogs = await Blogs.findByIdAndUpdate(
      id,
      { blog: blog },
      {
        returnOriginal: false,
        runValidators: true,
      }
    );
    console.log(newBlogs);
    res.send({
      blog: newBlogs.blog,
    });
  } catch (error) {
    console.log(error, "addBlogArticle");
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
