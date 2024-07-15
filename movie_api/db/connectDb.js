let mongoose = require("mongoose");

let connectDb = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;
