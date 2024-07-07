let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
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

let book = mongoose.model("bookSchema", bookSchema);

module.exports = book;