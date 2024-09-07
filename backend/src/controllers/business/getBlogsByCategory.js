const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");

async function getBlogsByCategory(req, res) {
  try {
    const { categoryId } = req.params;
    const blogs = await Blogs.find({ category: categoryId }).select(
      "title imageUrl description _id"
    );
    res.send(blogs);
  } catch (error) {
    console.log(error, "getBlogsByCategory");
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

module.exports = getBlogsByCategory;
