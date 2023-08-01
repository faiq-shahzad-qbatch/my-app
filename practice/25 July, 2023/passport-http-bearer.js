// app.js

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

const app = express();
const port = 3000;

// Configure express-session
app.use(
  session({
    secret: "your_secret_key", // Replace with a secret key for session encryption
    resave: false,
    saveUninitialized: false,
  })
);

// Dummy users and their bearer tokens (replace with your own user database)
const users = [
  { id: 1, username: "john", token: "user_token_123" },
  { id: 2, username: "jane", token: "user_token_456" },
];

// Configure Passport with BearerStrategy
passport.use(
  new BearerStrategy((token, done) => {
    // Find the user based on the provided bearer token
    const user = users.find((u) => u.token === token);

    // If user not found, return error
    if (!user) {
      return done(null, false);
    }

    // Authentication successful, return the user
    return done(null, user);
  })
);

// Middleware for setting up Passport
app.use(passport.initialize());

// Protected route accessible only to authenticated users
app.get(
  "/dashboard",
  passport.authenticate("bearer", { session: false }),
  (req, res) => {
    res.send(`Welcome to the dashboard, ${req.user.username}!`);
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// curl -H "Authorization: Bearer user_token_123" http://localhost:3000/dashboard
