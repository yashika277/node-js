const express = require("express");
const { commentController } = require("../../controller");

const router = express.Router();
// create comment
router.post("/create-comment", commentController.createComment);

// get comment list
router.get("/getcomment-List", commentController.getCommentList);

// delete comment list
router.delete("/delete/:commentId", commentController.deleteRecord);

// update comment id
router.put("/update/:commentId", commentController.updateRecord);

module.exports = router;
