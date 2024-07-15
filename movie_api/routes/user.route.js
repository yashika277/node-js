let express = require("express");
const { userController } = require("../controller");
let route = express.Router();

route.post("/adduser", userController.registerUser);
route.post("/login", userController.Login);

module.exports = route;
