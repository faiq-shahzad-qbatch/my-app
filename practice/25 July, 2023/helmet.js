const express = require("express");
const helmet = require("helmet");

const app = express();
const port = 3000;

// // Use Helmet middleware to set various HTTP headers
// app.use(helmet());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "example.com"],
      },
    },
    // Other options...
  })
);

// Your other middleware and route handlers go here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
