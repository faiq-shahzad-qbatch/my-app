// server.js

const express = require("express");
const app = express();

// Route to be tested
app.get("/api/greet", (req, res) => {
  res.json({ message: "Hello, World!" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
