// app.js

const express = require("express");
const app = express();
const port = 3000;

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Handling GET request to the root URL
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Handling POST request to the '/users' URL
app.post("/users", (req, res) => {
  // Handle the request and send a response
});

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
