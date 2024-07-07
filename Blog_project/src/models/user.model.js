const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
    },
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    blog: {
      type: mongoose.Types.ObjectId,
      ref: "blog",
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
