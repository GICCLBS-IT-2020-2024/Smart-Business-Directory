const multer = require("multer");
const Blog = require("../../database/models/Blogs");
const errorHandler = require("../../helpers/errorHandler");
const upload = require("../../helpers/uploadMulter");
const deleteFile = require("../../helpers/deleteFile");

let uploadSingle = upload.single("main");

const url = process.env.BIZGUIDE360_API;

async function addBlogMainImg(req, res) {
  try {
    uploadSingle(req, res, async function (err) {
      const _id = req.body.id;
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ msg: err.message });
      } else if (err) {
        return res.status(400).json({ msg: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ msg: "File not saved" });
      }

      const result = await Blog.findByIdAndUpdate(_id, {
        imageUrl: url + req.file.destination + req.file.filename,
      });

      // Delete previous image
      if (result && result.imageUrl) {
        await deleteFile(result.imageUrl);
      }

      res.send({ imageUrl: url + req.file.destination + req.file.filename });
    });
  } catch (error) {
    console.log(error, "addBlogMainImg");
    const errRes = errorHandler(error);
    res.status(errRes.status).json(errRes.errors);
  }
}

module.exports = addBlogMainImg;
