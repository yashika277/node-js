const { commentService } = require("../services");

// create comment
const createComment = async (req, res) => {
  try {
    const reqBody = req.body;
    const comment = await commentService.createComment(reqBody);
    if (!comment) {
      throw new Error("comment not found !");
    }

    res.status(200).json({
      success: true,
      message: "comment created successfully!",
      data: comment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get list
const getCommentList = async (req, res) => {
  try {
    const getList = await commentService.getCommentList();
    if (!getList) {
      throw new Error("comment not found !");
    }

    res.status(200).json({
      success: true,
      message: "comment list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete data
const deleteRecord = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const commentExist = await commentService.getCommentById(commentId);
    if (!commentExist) {
      throw new Error("comment is not found !");
    }

    await commentService.deleteRecord(commentId);

    res.status(200).json({
      success: true,
      message: " comment record deleted successfully !",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// update data
const updateRecord = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const commentExist = await commentService.getCommentById(commentId);
    if (!commentExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await commentService.updateRecord(commentId, req.body);

    res.status(200).json({
      success: true,
      message: "comment record updated successfully !",
      data: updated,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createComment,
  getCommentList,
  updateRecord,
  deleteRecord,
};
