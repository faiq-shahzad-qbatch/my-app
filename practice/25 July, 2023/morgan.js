const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

// Use morgan middleware for logging
app.use(morgan("combined"));

// Define your routes and route handlers
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
