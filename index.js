const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/auth");
const blogRoutes = require("./src/routes/blog");
const noteRoutes = require("./src/routes/notes");
const fileRoutes = require("./src/routes/files");
const assignmentRoutes = require("./src/routes/assignment");
const catRoutes = require("./src/routes/cat");
const catfileRoutes = require("./src/routes/cat2");

dotenv.config();
app.use(bodyParser.json()); //type json
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const PORT = process.env.PORT || 4000;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to mongoose"))
  .catch((err) => console.log(err));

// testing
app.get("/", (req, res) => {
  try {
    res.send("hello from api");
  } catch (error) {
    console.log(error);
  }
});

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);
app.use("/note", noteRoutes);
app.use("/file", fileRoutes);
app.use("/assignment", assignmentRoutes);
app.use("/cat", catRoutes);
app.use("/catfile", catfileRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.listen(PORT, () => {
  console.log("backend is running yoi..");
});
