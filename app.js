const express = require('express');
const app = express();

app.get("/", (req, res) => {
     res.send("this is home page");
});

app.get("/login", (req, res) => {
    res.send("this is login page");
});

app.get("/signup", (req, res) => {
    res.send("this is signup page");
});

app.listen(3000 , function(){
    console.log("server is started");
});