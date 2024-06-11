const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    task : {
        type : String,
        require : true
    },
    time : {
        type : String,
        require : true
    }
})


const Todo = mongoose.model("TodoSchema", TodoSchema)
module.exports = Todo