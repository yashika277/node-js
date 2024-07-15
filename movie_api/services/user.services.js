const { userSchema } = require("../models");

let registerUser = (body) => {
  return userSchema.create(body);
};

let find = (email) => {
  return userSchema.findOne({  email });
};
module.exports = { registerUser, find };
