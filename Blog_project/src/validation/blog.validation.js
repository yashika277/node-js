const Joi = require("joi");

const createBlog = {
  body: Joi.object().keys({
    title: Joi.string().required().trim(),
    description: Joi.string().required().trim(),
    blog_image: Joi.string().allow(),
    media_type: Joi.string().required().trim(),
    user: Joi.string().allow().trim(),
  }),
};

module.exports = {
  createBlog,
};
