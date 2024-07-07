const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema(
  {
    firtsname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    phoneno: {
      type: String,
      trim: true,
    },
    numPosts: {
      type: Number,
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

const Authors = mongoose.model("author", authorsSchema);

module.exports = Authors;
