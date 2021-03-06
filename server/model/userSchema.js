const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  cpassword: {
    type: "string",
    required: true,
  },
  tokens: [
    {
      token: {
        type: "string",
        required: true,
      },
    },
  ],
  notes: [
    {
      tittle: {
        type: "string",
        required: true,
      },
      content: {
        type: "string",
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }

  next();
});

//generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign(
      {
        _id: this._id,
      },
      process.env.SECRET_KEY
    );
    this.tokens = this.tokens.concat({
      token: token,
    });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};
userSchema.methods.saveusernotes = async function (tittle, content) {
  try {
    this.notes = this.notes.concat({
      tittle: tittle,
      content: content,
    });
    await this.save();
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
