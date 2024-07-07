const { authorService } = require("../services");

// create author
const createAuthor = async (req, res) => {
  try {
    const reqBody = req.body;
    const author = await authorService.createAuthor(reqBody);
    if (!author) {
      throw new Error("author not found !");
    }

    res.status(200).json({
      success: true,
      message: "author created successfully!",
      data: author,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get list author
const getAuthorList = async (req, res) => {
  try {
    const getList = await authorService.getAuthorList();
    if (!getList) {
      throw new Error("author not found !");
    }

    res.status(200).json({
      success: true,
      message: "author list successfully!",
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
    const authorId = req.params.authorId;
    const authorExist = await authorService.getAuthorById(authorId);
    if (!authorExist) {
      throw new Error("author is not found !");
    }

    await authorService.deleteRecord(authorId);

    res.status(200).json({
      success: true,
      message: " author record deleted successfully !",
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
    const authorId = req.params.authorId;
    const authorExist = await authorService.getAuthorById(authorId);
    if (!authorExist) {
      throw new Error("Something wents wrong , please try again or later !");
    }

    const updated = await authorService.updateRecord(authorId, req.body);

    res.status(200).json({
      success: true,
      message: " author record updated successfully !",
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
  createAuthor,
  getAuthorList,
  updateRecord,
  deleteRecord,
};
