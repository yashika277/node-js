let express = require("express")
let routes = express.Router()
let TodoRoutes = require("./TodoRoutes")

routes.use("/todo", TodoRoutes)
module.exports = routes