let express = require("express");
let routes = express.Router();
let userRoutes = require("./user.route");

routes.use("/user", userRoutes);

module.exports = routes;
