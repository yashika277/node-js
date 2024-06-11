const mongoose = require("mongoose")

console.log("process.env.DB_URL", process.env.DB_URL)

function dbConnect (){
    mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log("database connect success");
    })
    .catch((err) =>{
        console.log(err, "err");
    })
}

module.exports = dbConnect;