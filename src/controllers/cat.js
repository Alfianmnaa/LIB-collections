const Category = require("../models/cat");

// POST
exports.createcat = async (req, res) => {
  try {
    const newCat = new Category(req.body);
    const savedcat = await newCat.save();
    res.status(200).json(savedcat);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL

exports.getallcats = async (req, res) => {
  try {
    const getcats = await Category.find();
    res.status(200).json(getcats);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deletecat = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("category has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};
