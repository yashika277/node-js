const { Blog } = require("../models");

// create blog
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};

// get blog list
const getBlogList = async (req, res) => {
  return Blog.find().populate("user");
};

// get blog id list
const getBlogById = async (blogId) => {
  return Blog.findById(blogId);
};

// update blog
const updateRecord = async (blogId, updateBody) => {
  return Blog.findByIdAndUpdate(blogId, { $set: updateBody });
};

// blog delete
const deleteRecord = async (blogId) => {
  return Blog.findByIdAndDelete(blogId);
};

module.exports = {
  createBlog,
  getBlogById,
  getBlogList,
  updateRecord,
  deleteRecord,
};
