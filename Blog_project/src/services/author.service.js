const { Authors } = require("../models");

// create Authors
const createAuthor = async (reqBody) => {
  return Authors.create(reqBody);
};

// get Authors list
const getAuthorList = async (req, res) => {
  return Authors.find();
};
// get Authors by id
const getAuthorById = async (authorId) => {
  return Authors.findById(authorId);
};
// update Authors list
const updateRecord = async (authorId, updateBody) => {
  return Authors.findByIdAndUpdate(authorId, { $set: updateBody });
};

// delete Authors list
const deleteRecord = async (authorId) => {
  return Authors.findByIdAndDelete(authorId);
};

module.exports = {
  createAuthor,
  getAuthorById,
  getAuthorList,
  updateRecord,
  deleteRecord,
};
