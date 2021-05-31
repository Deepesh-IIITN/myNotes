const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookiesParser = require("cookie-parser");

dotenv.config({
  path: "./config.env",
});

require("./db/conn");
//const User = require('./model/userSchema');
app.use(express.json());
app.use(cookiesParser());
const PORT = process.env.PORT || 5000;
/////////////////////////////////////////////////////

app.use(require("./router/auth"));

app.get("/login", (req, res) => {
  res.send("this is login page");
});

app.get("/signup", (req, res) => {
  res.send("this is Signup page");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, function () {
  console.log("server is started " + PORT);
});
