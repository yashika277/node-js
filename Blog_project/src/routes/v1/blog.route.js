const express = require("express");
const { blogValidation } = require("../../validation");
const { blogController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create blog
router.post(
  "/createBlog",
  validate(blogValidation.createBlog),
  blogController.createBlog
);

// get blog list
router.get("/getList", blogController.getBlogList);

// update blog
router.put("/update/:blogId", blogController.updateRecord);

// delete blog
router.delete("/delete/:blogId", blogController.deleteRecord);

module.exports = router;
