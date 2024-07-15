let jwt = require("jsonwebtoken");

let setToken = (data) => {
  return (token = jwt.sign(data, process.env.KEY));
};

module.exports = { setToken };
