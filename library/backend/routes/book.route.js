let express=require("express")

let route=express.Router();

route.get("/get",(req,res)=>{
    res.status(200)
})