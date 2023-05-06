const Files = require("../models/files");

// POST
exports.postfile = async (req, res) => {
  try {
    const newFile = new Files(req.body);
    const savedfile = await newFile.save();
    res.status(200).json({
      message: "Create Files Success",
      savedfile,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getallfiles = async (req, res) => {
  const category = req.query.cat;
  try {
    let files;
    if (category) {
      files = await Files.find({ category });
    } else {
      files = await Files.find();
    }
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deletefile = async (req, res) => {
  try {
    await Files.findByIdAndDelete(req.params.id);
    res.status(200).json("Files has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};
