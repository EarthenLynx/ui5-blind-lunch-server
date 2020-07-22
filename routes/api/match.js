const express = require("express");
const HANDLE_MATCH = require("../../controller/match");

// Setup the router
const router = express.Router();

router.post("/", (req, res, next) => {
  HANDLE_MATCH(req, res, next);
});

module.exports = router;
