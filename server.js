const express = require("express");

// Define the vars for the app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import the necessary routes
const signupRoute = require("./routes/api/signup");
const matchRoute = require("./routes/api/match");

// Register the routes in the application
app.use("/signup", signupRoute);
app.use("/match", matchRoute);

// App will listen on port 3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
