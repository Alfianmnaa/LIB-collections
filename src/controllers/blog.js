const { json } = require("body-parser");
const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

// POST
exports.createBlogPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("invalid value");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const newPost = new BlogPost(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({
      message: "Create Post Success",
      savedPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
exports.updatepost = async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// DELETE
exports.deletepost = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.status(200).json("post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getallposts = async (req, res) => {
  const category = req.query.cat;
  try {
    let posts;
    if (category) {
      posts = await BlogPost.find({ category });
    } else {
      posts = await BlogPost.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// exports.getallposts = async (req, res) => {
//   try {
//     const allpost = await BlogPost.find();
//     res.status(200).json(allpost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

// GET ONE
exports.getonepost = async (req, res) => {
  try {
    const getone = await BlogPost.findById(req.params.id);
    res.status(200).json(getone);
  } catch (err) {
    res.status(500).json(err);
  }
};
