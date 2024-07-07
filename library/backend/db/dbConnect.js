// const mongoose = require("mongoose");
// mongoose.connect(
//     "mongodb+srv://yashibhadkoliya:yashika2%40%404@cluster0.xh96azp.mongodb.net/library-manage"
// ).then(() => console.log("connected"));

let mongoose = require("mongoose");

let dbConnect = () => {
  mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = dbConnect;