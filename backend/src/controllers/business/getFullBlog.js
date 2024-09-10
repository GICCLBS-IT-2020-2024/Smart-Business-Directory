const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");

async function getFullBlog(req, res) {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId).select(
      "title imageUrl description _id blog"
    );

    res.send(blog);
  } catch (error) {
    console.log(error, "getBlogsByCategory");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = getFullBlog;
