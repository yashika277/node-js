const Joi = require("joi");

// create user validation
const createUser = {
  body: Joi.object().keys({
    user_name: Joi.string().required().trim(),
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
    dateOfBirth: Joi.string().required().trim(),
    blog: Joi.string().required().trim(),
  }),
};

module.exports = {
  createUser,
};
