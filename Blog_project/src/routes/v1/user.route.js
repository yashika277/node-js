const express = require("express");
const { userValidation } = require("../../validation");
const { userController } = require("../../controller");
const validate = require("../../middlewares/validate");

const router = express.Router();
// create user
router.post(
  "/createUser",
  validate(userValidation.createUser),
  userController.createUser
);

// get user list
router.get("/getList", userController.getUserList);

// delete user list
router.delete("/delete/:userId", userController.deleteRecord);

// update user id
router.put("/update/:userId", userController.updateRecord);

module.exports = router;
