const router = require("express").Router();

const bookModel = require("../models/bookmodel");

/* ------------------------------ post request ------------------------------ */
router.post("/add", async (req, res) => {
    try {
        const data = req.body;
        const newBook = new bookModel(data);
        await newBook.save().then(() => {
            res.status(200)
                .json({ message: "Book added succesfully" })
        })
    } catch (err) {
        console.log(err);
    }
});

/* ------------------------------- get request ------------------------------ */
router.get("/getBooks", async (req, res) => {
    let books;
    try {
        books = await bookModel.find();
        res.status(200).json({ books })
    } catch (err) {
        console.log(err);
    }
})

/* --------------------------- get request with id -------------------------- */
router.get("/getBooks/:id", async (req, res) => {
    let book;
    const id = req.params.id;
    try {
        book = await bookModel.findById(id);
        res.status(200).json({ book });
    } catch (err) {
        console.log(err);
    }
})

/* ---------------------------- update book by id --------------------------- */
router.put("/updateBooks/:id", async (req, res) => {
    const id = req.params.id;
    const { bookName, description, author, image, price } = req.body;
    let book;
    try {
        book = await bookModel.findByIdAndUpdate(id, {
            bookName, description, author, image, price
        });
        await book.save().then(() => res.send(200).json({ message: "data updated successfully" }))
    }
    catch (err) {
        console.log(err);
    }
})

/* ---------------------------- delete book by id --------------------------- */
router.delete("/deleteBook/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await bookModel.findByIdAndDelete(id)
            .then((res) => res.status(201)
                .json({ message: "delete successfuly" }))
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;