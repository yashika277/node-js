const { required } = require("joi");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})

module.exports=new mongoose.model("books",bookSchema)