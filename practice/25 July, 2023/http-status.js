const httpStatus = require("http-status");
const express = require("express");

const app = express();

// Example: Setting a status code for a response
app.get("/", (req, res) => {
  // Your code here...
  res.status(httpStatus.OK).send("OK");
});

// Example: Handling an error with a specific status code
app.get("/not-found", (req, res) => {
  // Your code here...
  res.status(httpStatus.NOT_FOUND).send("Not Found");
});
