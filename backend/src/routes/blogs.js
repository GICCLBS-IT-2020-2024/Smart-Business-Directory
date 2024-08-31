const addBlogs = require("../controllers/business/addBlogs");
const express = require("express");
const router = express.Router();
const assistantAdminGuard = require("../middlewares/assistantAdminGuard");
const userGuard = require("../middlewares/userGuard");

router.get("/", (req, res) => {
  res.send("Birds home page");
});

router.post("/", userGuard, assistantAdminGuard, addBlogs);

module.exports = router;
