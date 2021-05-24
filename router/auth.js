const express = require('express');
const router = express.Router();

require('../db/conn');

const User = require('../model/userSchema');

router.get("/", (req, res) => {
      res.send("this is router");
 });
 
 router.post("/register", (req, res) => {
      const {name , email , password , cpassword} = req.body;
      if(!name || !email || !password || !cpassword)
      {
           return res.status(422).json({error : "plz fill all required field"});
      }
      User.findOne({email : email}).then((userExists) => {
           if(userExists){
          return res.status(422).json({error : "user already exists"});
           }
           const user = new User({name : name, email : email, password : password, cpassword : cpassword});
      user.save().then((success) => {res.status(201).json({message:"successfully registered"})}).catch((error) => {res.status(500).json({error})});

      }).catch((err)=>{console.log(err)});

      
});

module.exports = router;