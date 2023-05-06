const express = require("express");
const router = express.Router();
const assignmentController = require("../controllers/assignment");

// POST
router.post("/post", assignmentController.createassigment);

// GET ALL
router.get("/posts", assignmentController.getallassignments);

// GET ONE
router.get("/post/:id", assignmentController.getoneassignment);

// DELETE
router.delete("/post/:id", assignmentController.deleteassignment);

// UPDATE
router.put("/post/:id", assignmentController.updateassignment);

module.exports = router;
