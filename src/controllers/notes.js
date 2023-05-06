const Notes = require("../models/notes");

// POST
exports.postnote = async (req, res) => {
  try {
    const newNote = new Notes(req.body);
    const savednote = await newNote.save();
    res.status(200).json({
      message: "Create Post Success",
      savednote,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ONE
exports.getonenote = async (req, res) => {
  try {
    const onenote = await Notes.findById(req.params.id);
    res.status(200).json(onenote);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getallnotes = async (req, res) => {
  const category = req.query.cat;
  try {
    let notes;
    if (category) {
      notes = await Notes.find({ category });
    } else {
      notes = await Notes.find();
    }
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deletenote = async (req, res) => {
  try {
    await Notes.findByIdAndDelete(req.params.id);
    res.status(200).json("Notes has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};
