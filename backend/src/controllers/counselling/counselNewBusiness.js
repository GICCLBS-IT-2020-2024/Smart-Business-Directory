const axios = require("axios");
const errorHandler = require("../../helpers/errorHandler");
const trimInputs = require("../../helpers/trimInputs");

async function counselNewBusiness(req, res) {
  try {
    const ans = trimInputs(req.body);
    console.log(ans);
    // const response = await axios.get("http://localhost:8000/api/data/");
    res.send([{ ok: true }]);
  } catch (error) {
    console.log(error, "counselNewBusiness");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = counselNewBusiness;
