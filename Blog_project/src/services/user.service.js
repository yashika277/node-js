const { User } = require("../models");

// create user
const createUser = async (reqBody) => {
  return User.create(reqBody);
};

// get user list
const getUserList = async (req, res) => {
  return User.find().populate("blog");
};
// get user by id
const getUserById = async (userId) => {
  return User.findById(userId);
};
// update user list
const updateRecord = async (userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
};

// delete user lisr
const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
};

module.exports = {
  createUser,
  getUserById,
  getUserList,
  updateRecord,
  deleteRecord,
};
