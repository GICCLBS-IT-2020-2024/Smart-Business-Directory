const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");

async function getBlogDataToEdit(req, res) {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId).select(
      "title imageUrl description _id blog category"
    );

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
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = getBlogDataToEdit;
