const { Comments } = require("../models");

// create Comments
const createComment = async (reqBody) => {
  return Comments.create(reqBody);
};
// get Comments list
const getCommentList = async (req, res) => {
  return Comments.find().populate("author").populate("user");
};
// get Comments by id
const getcommentById = async (commentId) => {
  return Comments.findById(commentId);
};
// update Comments list
const updateRecord = async (commentId, updateBody) => {
  return Comments.findByIdAndUpdate(commentId, { $set: updateBody });
};

// delete Comments list
const deleteRecord = async (commentId) => {
  return Comments.findByIdAndDelete(commentId);
};

module.exports = {
  createComment,
  getCommentList,
  getcommentById,
  updateRecord,
  deleteRecord,
};
