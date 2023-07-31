// Import required libraries and modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of the Express app
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded data
app.use(bodyParser.json()); // Parse JSON data

// Define a route that handles POST requests
app.post("/api/data", (req, res) => {
  // Access the data from the request body
  const requestData = req.body;

  // Process the data or save it to the database, etc.
  console.log("Received data:", requestData);

  // Respond to the client
  res.status(200).json({ message: "Data received successfully" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
