const express = require("express");
const cMatch = require("../../controller/match");

// Setup the router
const router = express.Router();

router.get("/", (req, res) => {
  cMatch(req, res);
});

module.exports = router;
