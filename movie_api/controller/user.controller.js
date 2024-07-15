const { verify } = require("jsonwebtoken");
const { userService } = require("../services");

let registerUser = async (req, res) => {
  try {
    let body = req.body;
    let { email } = body;
    // cheack duplication
    let duplicateCheck = await userService.find(email);
    if (duplicateCheck) {
      throw new Error("Email Already exist");
    }

    // addData
    let result = await userService.registerUser(body);

    // check response Error
    if (!result) {
      throw new Error("somethings went wrong");
    }

    // final status
    res.status(201).json({
      message: "User added successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

let Login = async (req, res) => {
  try {
    let { email, password } = req.body;
    console.log("🚀 ~ Login ~ email:", email)

    let Verify = await userService.find(email);

    if (!Verify) {
      throw new Error("pls check email");
    }
    if (Verify.password !== password) {
      throw new Error("pls check password");
    }
    
    let result = Verify;
    res.status(200).json({
      message: "Login successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { registerUser, Login };
