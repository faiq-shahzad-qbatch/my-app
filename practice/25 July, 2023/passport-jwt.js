// app.js

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

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

// Dummy users and their JWT secret (replace with your own user database and secret)
const users = [
  { id: 1, username: "john", secret: "your_jwt_secret_123" },
  { id: 2, username: "jane", secret: "your_jwt_secret_456" },
];

// JWT options for extracting and verifying tokens
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'), // Corrected method
  secretOrKey: "your_jwt_secret_key", // Replace with your JWT secret key
};

// Configure Passport with JwtStrategy
passport.use(
  new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    // Find the user based on the provided JWT token
    const user = users.find((u) => u.secret === jwtPayload.secret);

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
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(`Welcome to the dashboard, ${req.user.username}!`);
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
