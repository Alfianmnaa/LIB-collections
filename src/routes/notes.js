const express = require("express");
const router = express.Router();
const noteController = require("../controllers/notes");

// POST
router.post("/post", noteController.postnote);

// GET ONE
router.get("/post/:id", noteController.getonenote);

// GET ALL
router.get("/posts", noteController.getallnotes);

// DELETE
router.delete("/post/:id", noteController.deletenote);

module.exports = router;
