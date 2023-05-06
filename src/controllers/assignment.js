const Assignment = require("../models/assignment");

// POST
exports.createassigment = async (req, res) => {
  try {
    const newAssignment = new Assignment(req.body);
    const savedassignment = await newAssignment.save();
    res.status(200).json({
      message: "Create Assignment Success",
      savedassignment,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getallassignments = async (req, res) => {
  try {
    const getassignments = await Assignment.find();
    res.status(200).json(getassignments);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ONE
exports.getoneassignment = async (req, res) => {
  try {
    const getassignment = await Assignment.findById(req.params.id);
    res.status(200).json(getassignment);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
exports.deleteassignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);
    res.status(200).json("Assignment has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
exports.updateassignment = async (req, res) => {
  try {
    const updateone = await Assignment.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Assignment has been updated",
      updateone,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
