const express = require("express");
const router = express.Router();
const catController = require("../controllers/cat");

// POST
router.post("/post", catController.createcat);

// GET ALL
router.get("/posts", catController.getallcats);

// DELETE
router.delete("/post/:id", catController.deletecat);

module.exports = router;
