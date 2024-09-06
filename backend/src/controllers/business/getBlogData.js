const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");
const Blogs = require("../../database/models/Blogs");

async function getBlogData(req, res) {
  try {
    const { _id, role } = req.userData;

    console.log(_id);

    const blogs = await Blogs.find()
      .populate("author", "username") // Populate only the username of the author
      .populate("category", "label") // Populate only the label of the category
      .exec();

    // Map through the blogs to format the response
    const formattedBlogs = blogs.map((blog) => ({
      _id: blog._id,
      title: blog.title,
      author: blog.author._id.toString() === _id ? "You" : blog.author.username,
      category: blog.category.label,
    }));

    res.send(formattedBlogs);
  } catch (error) {
    console.log(error, "getBlogData");
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

module.exports = getBlogData;
