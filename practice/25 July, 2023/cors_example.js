const express = require("express");
const cors = require("cors");

const app = express();

// // Enable CORS for all routes
// app.use(cors());

const allowedOrigins = ["http://example.com", "http://localhost:8080"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

// Define your routes and other middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
