const express = require("express");
const methodOverride = require("method-override");

const app = express();
const port = 3000;

// Use method-override middleware
app.use(methodOverride("_method")); // "_method" is the default query parameter to override the method

// Define your routes and route handlers
app.post("/update", (req, res) => {
  // The overridden method will be available in req.method
  if (req.method === "PUT") {
    // Handle the PUT request
    res.send("Updating data with PUT method");
  } else if (req.method === "DELETE") {
    // Handle the DELETE request
    res.send("Deleting data with DELETE method");
  } else {
    res.send("Invalid method");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
