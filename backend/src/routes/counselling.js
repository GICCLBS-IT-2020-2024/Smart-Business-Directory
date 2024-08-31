const express = require("express");
const counselNewBusiness = require("../controllers/counselling/counselNewBusiness");

const router = express.Router();

router.post("/", counselNewBusiness);

module.exports = router;
