const addBlogs = require("../controllers/business/addBlogs");
const express = require("express");
const router = express.Router();
const assistantAdminGuard = require("../middlewares/assistantAdminGuard");
const userGuard = require("../middlewares/userGuard");
const addBlogMainImg = require("../controllers/business/addBlogMainImg");
const addBlogArticle = require("../controllers/business/addBlogArticle");

router.post("/", userGuard, assistantAdminGuard, addBlogs);

router.patch("/blog-image/", userGuard, assistantAdminGuard, addBlogMainImg);

router.patch("/blog-article/", userGuard, assistantAdminGuard, addBlogArticle);

module.exports = router;
