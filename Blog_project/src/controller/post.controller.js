const { postService } = require("../services");

// create post
const createPost = async (req, res) => {
  try {
    const reqBody = req.body;
    const post = await postService.createPost(reqBody);
    if (!post) {
      throw new Error("post not found !");
    }

    res.status(200).json({
      success: true,
      message: "post created successfully!",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get post list
const getPostList = async (req, res) => {
  try {
    const getList = await postService.getPostList();
    if (!getList) {
      throw new Error("post not found !");
    }

    res.status(200).json({
      success: true,
      message: "post list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// delete  post data
const deleteRecord = async (req, res) => {
  try {
    const postId = req.params.userId;
    const postExist = await postService.getPostById(postId);
    if (!postExist) {
      throw new Error("post is not found !");
    }

    await postService.deleteRecord(postId);

    res.status(200).json({
      success: true,
      message: "post record deleted successfully !",
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
    const postId = req.params.postId;
    const postExist = await postService.getPostById(postId);
    if (!postExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await postService.updateRecord(postId, req.body);

    res.status(200).json({
      success: true,
      message: " post record updated successfully !",
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
  createPost,
  getPostList,
  updateRecord,
  deleteRecord,
};
