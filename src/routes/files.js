const express = require("express");
const router = express.Router();
const fileController = require("../controllers/files");

// POST
router.post("/post", fileController.postfile);

// GET ALL
router.get("/posts", fileController.getallfiles);

// DELETE
router.delete("/post/:id", fileController.deletefile);
module.exports = router;
