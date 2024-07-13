require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// app.use('/api/users', require('./routes/users'));

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
