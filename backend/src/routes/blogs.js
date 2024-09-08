const addBlogs = require("../controllers/business/addBlogs");
const express = require("express");
const adminGuard = require("../middlewares/adminGuard");
const userGuard = require("../middlewares/userGuard");
const addBlogMainImg = require("../controllers/business/addBlogMainImg");
const addBlogArticle = require("../controllers/business/addBlogArticle");
const getBlogData = require("../controllers/business/getBlogData");
const getBlogsByCategory = require("../controllers/business/getBlogsByCategory");
const getBlogDataToEdit = require("../controllers/business/getBlogDataToEdit");
const removeBlog = require("../controllers/business/removeBlog");
const getFullBlog = require("../controllers/business/getFullBlog");
const getLatestBlogs = require("../controllers/business/getLatestBlogs");

const router = express.Router();

router.post("/", userGuard, adminGuard, addBlogs);

router.get("/blog-latest", getLatestBlogs);

router.patch("/blog-image/", userGuard, adminGuard, addBlogMainImg);

router.patch("/blog-article/", userGuard, adminGuard, addBlogArticle);

router.get("/blog-data/", userGuard, adminGuard, getBlogData);

router.get("/blog-data/:categoryId", getBlogsByCategory);

router.get("/blog-edit/:blogId", userGuard, adminGuard, getBlogDataToEdit);

router.delete("/:blogId", userGuard, adminGuard, removeBlog);

router.get("/:blogId", getFullBlog);

module.exports = router;
