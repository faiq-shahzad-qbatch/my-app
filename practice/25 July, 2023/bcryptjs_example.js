// Import the bcryptjs library
const bcrypt = require("bcryptjs");

// The password you want to hash and store in the database
const plainPassword = "MySecretPassword123";

// Generate a salt (an additional random value)
bcrypt.genSalt(10, (err, salt) => {
  if (err) {
    return console.error("Error generating salt:", err);
  }

  // Hash the password along with the generated salt
  bcrypt.hash(plainPassword, salt, (err, hash) => {
    if (err) {
      return console.error("Error hashing password:", err);
    }

    // Now you can store the 'hash' in your database, associating it with the user account
    console.log("Hashed password:", hash);

    // To verify a password later, you can use the 'compare' method
    const userEnteredPassword = "MySecretPassword123";
    bcrypt.compare(userEnteredPassword, hash, (err, isMatch) => {
      if (err) {
        return console.error("Error comparing passwords:", err);
      }

      // 'isMatch' will be true if the user-entered password matches the stored hash
      console.log("Passwords match:", isMatch);
    });
  });
});
