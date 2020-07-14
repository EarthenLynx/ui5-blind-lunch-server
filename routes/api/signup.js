const express = require("express");
const HANDLE_SIGNUP = require("../../controller/signup");

// Setup the router
const router = express.Router();

router.post("/", (req, res, next) => {
  HANDLE_SIGNUP(req, res, next);
});

module.exports = router;
