const axios = require("axios");
const Blogs = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function counselNewBusiness(req, res) {
  try {
    const ans = trimInputs(req.body);
    const response = await axios.post(
      `${process.env.BIZ_BACKEND_API}api/counsel/`,
      ans
    );
    const titlesToSearch = [
      response.data.predicted_business_name,
      ...response.data.top_3_predictions,
    ];
    const blogs = await Blogs.find({ title: { $in: titlesToSearch } }).select(
      "title description _id imageUrl"
    );
    res.send(blogs);
  } catch (error) {
    console.log(error, "counselNewBusiness");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = counselNewBusiness;
