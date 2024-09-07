const addBlogs = require("../controllers/business/addBlogs");
const express = require("express");
const router = express.Router();
const assistantAdminGuard = require("../middlewares/assistantAdminGuard");
const userGuard = require("../middlewares/userGuard");
const addBlogMainImg = require("../controllers/business/addBlogMainImg");
const addBlogArticle = require("../controllers/business/addBlogArticle");
const getBlogData = require("../controllers/business/getBlogData");
const getBlogsByCategory = require("../controllers/business/getBlogsByCategory");
const getBlogDataToEdit = require("../controllers/business/getBlogDataToEdit");

router.get("/blog-data/:categoryId", getBlogsByCategory);

router.get(
  "/blog-edit/:blogId",
  userGuard,
  assistantAdminGuard,
  getBlogDataToEdit
);

router.post("/", userGuard, assistantAdminGuard, addBlogs);

router.patch("/blog-image/", userGuard, assistantAdminGuard, addBlogMainImg);

router.patch("/blog-article/", userGuard, assistantAdminGuard, addBlogArticle);

router.get("/blog-data/", userGuard, assistantAdminGuard, getBlogData);

module.exports = router;
