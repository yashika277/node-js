let express=require("express")
let routes=express.Router;
let bookRoute=require("./book.route");


routes.use("/book",bookRoute);

module.exports=routes;