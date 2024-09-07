const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");

async function getBlogDataToEdit(req, res) {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId).select(
      "title imageUrl description _id blog category"
    );
    // .populate("category", "label");
    const formattedBlog = {
      id: blog._id,
      title: blog.title,
      imageUrl: blog.imageUrl,
      description: blog.description,
      blog: blog.blog,
      category: blog.category.toString(),
    };
    res.send(formattedBlog);
  } catch (error) {
    console.log(error, "getBlogDataToEdit");
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

module.exports = getBlogDataToEdit;
