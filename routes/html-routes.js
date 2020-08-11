// Dependencies
const router = require("express").Router();
const path = require("path");

// Routes
// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// stats route loads stats.html
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// exercise route loads exercise.html
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;