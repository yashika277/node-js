import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.js"

const app=express();

app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT || 5000
const DB_URL = process.env.DB_URL;


mongoose.connect(DB_URL).then(()=>{
    console.log("database connect successfully");
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})

app.use("/api/user",route);