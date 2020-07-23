const express = require("express");
const cleardb = require("./controller/resetLowdb");

// Define the vars for the app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Initialize the daily job to reset DB
cleardb();

// Import the necessary routes
const signupRoute = require("./routes/api/signup");
const matchRoute = require("./routes/api/match");

// Uncomment these to set the CORS headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Register the routes in the application
app.use("/signup", signupRoute);
app.use("/match", matchRoute);

// App will listen on port 3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
