const express = require("express");
const { authorController } = require("../../controller");

const router = express.Router();
// create author
router.post("/create-author", authorController.createAuthor);

// get author list
router.get("/getauthor-List", authorController.getAuthorList);

// delete author list
router.delete("/delete/:authorId", authorController.deleteRecord);

// update author id
router.put("/update/:authorId", authorController.updateRecord);

module.exports = router;
