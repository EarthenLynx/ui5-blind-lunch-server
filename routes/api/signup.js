const express = require("express");
const cSignUp = require("../../controller/signup");

// Setup the router
const router = express.Router();

router.get("/", (req, res) => {
  cSignUp(req, res);
});

module.exports = router;
