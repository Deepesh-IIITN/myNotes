const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({
    path: './config.env'
});

require('./db/conn');
//const User = require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// app.get("/", (req, res) => {
//      res.send("this is home page");
// });

app.get("/login", (req, res) => {
    res.send("this is login page");
});

app.get("/signup", (req, res) => {
    res.send("this is Signup page");
});

app.listen(PORT, function () {
    console.log('server is started ' + PORT);
});