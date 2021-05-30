const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.ut;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const userData = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!userData) {
      res.status(201).send("Created");
    }

    req.token = token;
    req.userData = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    res.status(201).send("Created");
  }
};

module.exports = Authenticate;
