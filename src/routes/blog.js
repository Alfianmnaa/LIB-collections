const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const blogController = require("../controllers/blog");

// POST
router.post("/post", [body("title").isLength({ min: 5 }).withMessage("title must contain more than five letters"), body("text").isLength({ min: 10 }).withMessage("input must contain more than ten letters")], blogController.createBlogPost);

// UPDATE
router.put("/post/:id", [body("title").isLength({ min: 5 }).withMessage("title must contain more than five letters"), body("text").isLength({ min: 10 }).withMessage("input must contain more than ten letters")], blogController.updatepost);

// DELETE
router.delete("/post/:id", blogController.deletepost);

// GET ONE POST
router.get("/post/:id", blogController.getonepost);

// GET ALL POST
router.get("/posts", blogController.getallposts);
module.exports = router;
