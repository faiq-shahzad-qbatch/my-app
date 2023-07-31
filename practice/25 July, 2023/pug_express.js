const express = require("express");
const app = express();

// Set Pug as the view engine
app.set("view engine", "pug");

// Define a route to render the Pug template
app.get("/", (req, res) => {
  res.render("Example", { title: "My Pug Template" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
