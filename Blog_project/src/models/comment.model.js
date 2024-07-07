const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "author",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    datePublished: {
      type: Number,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comments = mongoose.model("comment", commentsSchema);

module.exports = Comments;
