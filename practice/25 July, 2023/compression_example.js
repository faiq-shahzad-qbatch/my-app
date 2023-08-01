const express = require('express');
const compression = require('compression');

const app = express();

// Add compression middleware to enable gzip compression
app.use(compression());

// Define your routes and other middleware here

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
