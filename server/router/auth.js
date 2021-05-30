const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Authenticate = require("../middlewares/authentication");
const GetUserConfirm = require("../middlewares/GetUserConfirm");
require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("this is router");
});

//  router.post("/register", (req, res) => {
//       const {name , email , password , cpassword} = req.body;
//       if(!name || !email || !password || !cpassword)
//       {
//            return res.status(422).json({error : "plz fill all required field"});
//       }
//       User.findOne({email : email}).then((userExists) => {
//            if(userExists){
//           return res.status(422).json({error : "user already exists"});
//            }
//            const user = new User({name : name, email : email, password : password, cpassword : cpassword});
//            user.save().then((success) => {res.status(201).json({message : "you have successfully registered!!"})}).catch((error) => {res.status(500).json({error : "something went wrong!!"})});

//       }).catch((err)=>{console.log(err)});

// });
///////////////////////////////////////////////////////////
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
      return res.status(422).json({
        error: "plz fill all required field",
      });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "password and comfirm password are not matched",
      });
    }

    const userExists = await User.findOne({
      email: email,
    });

    if (userExists) {
      return res.status(422).json({
        error: "user already exists",
      });
    }
    const user = new User({
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
    });

    await user.save();
    res.status(201).json({
      message: "you have successfully registered!!",
    });
  } catch (err) {
    console.log(err);
  }
});
//////////////////////////////////////////////////////
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({
        error: "plz fill all required field",
      });
    }
    const userData = await User.findOne({
      email: email,
    });
    if (!userData) {
      return res.status(422).json({
        error: "email or password is incorrect",
      });
    }

    const isMatched = await bcrypt.compare(password, userData.password);
    if (isMatched) {
      const token = await userData.generateAuthToken();
      // console.log(token);
      res.cookie("ut", token, {
        expires: new Date(Date.now() + 28800000),
        httpOnly: true,
      });

      return res.status(200).json({
        message: "login successful",
      });
    } else {
      return res.status(422).json({
        error: "email or password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
///////////////////////////////////////////////////
router.post("/saveNotes", async (req, res) => {
  try {
    const { tittle, content, userID } = req.body;

    if (!tittle || !content) {
      return res.status(422).json({
        error: "plz fill all required field",
      });
    }
    const userData = await User.findOne({
      _id: userID,
    });
    if (!userData) {
      return res.status(422).json({
        error: "user is not found",
      });
    }
    // const user = new User({
    //   notes: userData.notes.concat({ note: { tittle, content } }),
    // });
    // const user = new User({
    //   notes: tittle,
    // });
    // return res.status(422).json(user);
    //await user.save();
    await userData.saveusernotes(tittle);
    res.status(201).json({
      message: "you have successfully created the note!!",
    });
  } catch (error) {
    throw new Error(error);
  }
});
///////////////////////////////////////////////////

router.get("/notes", Authenticate, (req, res) => {
  res.send(req.userData);
});

///////////////////////////////////////////////////

router.get("/getdata", GetUserConfirm, (req, res) => {
  res.send(req.userData);
});

///////////////////////////////////////////////////
module.exports = router;
