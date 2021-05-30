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
      throw new Error("User is not found");
    }
    req.token = token;
    req.userData = userData;
    req.userID = userData._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorizeed : no token provided");
    console.log(error);
  }
};

module.exports = Authenticate;
