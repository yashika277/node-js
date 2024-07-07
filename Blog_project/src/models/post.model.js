const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    datePublished: {
      type: Number,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "author",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "comment",
    },
    numComments: {
      type: Number,
    },
    numLikes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.model("post", postsSchema);

module.exports = Posts;
