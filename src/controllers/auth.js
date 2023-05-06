const User = require("../models/user");
const bcrypt = require("bcrypt");

// register
exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: hashedPass,
    });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }

  // const username = req.body.username;
  // const email = req.body.email;
  // const password = req.body.password;
  // const result = {
  //   message: "Register Success",
  //   data: {
  //     uid: 1,
  //     name: name,
  //     email: email,
  //     password: password,
  //   },
  // };
  // res.status(201).json(result);
};

// login
// exports.login = async (req, res) => {
//   try {
//     const user = await User.findOne({ username: req.body.username });
//     !user && res.status(400).json("wrong credential!");
//     const validate = await bcrypt.compare(req.body.password, user.password);
//     !validate && res.status(400).json("wrong credential!");
//     const { password, ...others } = user._doc;
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };
exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("wrong credential!");
    }
    const validate = await bcrypt.compare(req.body.password, user.password);
    if (!validate) {
      return res.status(400).json("wrong credential!");
    }
    const { password, ...others } = user._doc;
    if (!res.headersSent) {
      res.status(200).json(others);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
