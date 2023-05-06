const Categoryfiles = require("../models/cat2");

// POST
exports.createcatfile = async (req, res) => {
  try {
    const netcatfile = new Categoryfiles(req.body);
    const savedcatfile = await netcatfile.save();
    res.status(200).json(savedcatfile);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getallcatfiles = async (req, res) => {
  try {
    const getcatfiles = await Categoryfiles.find();
    res.status(200).json(getcatfiles);
  } catch (err) {
    res.status(500).json(err);
  }
};

//  DELETE
exports.deletecatfile = async (req, res) => {
  try {
    await Categoryfiles.findByIdAndDelete(req.params.id);
    res.status(200).json("category has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};
