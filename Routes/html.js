const router = require("express").Router();
const path = require("path");

//Index route - default route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//Get exercise HTML
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Get stats HTML
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//Export Router
module.exports = router;