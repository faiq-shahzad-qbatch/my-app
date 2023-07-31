// app.js

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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

// Dummy users for demonstration purposes (replace with your own user database)
const users = [
  { id: 1, username: "john", password: "password" },
  { id: 2, username: "jane", password: "123456" },
];

// Configure Passport
passport.use(
  new LocalStrategy((username, password, done) => {
    // Find the user based on the provided username
    const user = users.find((u) => u.username === username);

    // If user not found or password is incorrect, return error
    if (!user || user.password !== password) {
      return done(null, false, { message: "Invalid username or password" });
    }

    // Authentication successful, return the user
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Fetch user data based on the "id" and call "done(null, user)"
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Middleware for setting up Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, please log in!");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true, // Enable flash messages for failed login attempts
  })
);

app.get("/dashboard", isAuthenticated, (req, res) => {
  // Route accessible only to authenticated users
  res.send(`Welcome to the dashboard, ${req.user.username}!`);
});

app.get("/logout", (req, res) => {
  req.logout(); // Passport's logout method
  res.redirect("/login");
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
