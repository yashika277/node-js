let express = require("express");
require("dotenv").config();
let app = express();
let cors = require("cors");
const connectDb = require("./db/connectDb");
const routes = require("./routes/index");

// Make back-end publically
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect DataBase
connectDb();

// setup routes
app.use("/v1", routes);
// Creating Server
app.listen(process.env.PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " +
        process.env.PORT
    );
  else console.log("Error occurred, server can't start", error);
});
