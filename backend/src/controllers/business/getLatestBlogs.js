const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");

async function getLatestBlogs(req, res) {
  try {
    const { categoryId } = req.params;
    const blogs = await Blogs.find({})
      .sort({ updatedAt: -1 })
      .limit(9)
      .select("title imageUrl description _id");
    res.send(blogs);
  } catch (error) {
    console.log(error, "getLatestBlogs");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = getLatestBlogs;
