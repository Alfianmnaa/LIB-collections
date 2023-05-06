const express = require("express");
const router = express.Router();
const catfileController = require("../controllers/cat2");

// POST
router.post("/post", catfileController.createcatfile);

// GET ALL
router.get("/posts", catfileController.getallcatfiles);

// DELETE
router.delete("/post/:id", catfileController.deletecatfile);

module.exports = router;
