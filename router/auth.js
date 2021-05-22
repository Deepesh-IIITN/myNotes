const express = require('express');
const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');

router.get("/", (req, res) => {
      res.send("this is router");
 });
 
 router.post("/register", (req, res) => {
      
 });

module.exports = router;