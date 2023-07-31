// app.js

const mongoose = require("mongoose");

// Connect to MongoDB (replace "your_database_url" with your actual MongoDB URL)
const dbUrl = "mongodb://localhost:27017/your_database";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Define a schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a model using the schema
const User = mongoose.model("User", userSchema);

// Example CRUD operations
const runCRUDOperations = async () => {
  try {
    // Create a new user
    const newUser = new User({
      name: "John Doe",
      age: 30,
      email: "john@example.com",
    });

    const savedUser = await newUser.save();
    console.log("New user saved:", savedUser);

    // Find a user
    const foundUser = await User.findOne({ name: "John Doe" });
    console.log("Found user:", foundUser);

    // Update a user
    const updatedUser = await User.findOneAndUpdate(
      { name: "John Doe" },
      { age: 31 },
      { new: true }
    );
    console.log("Updated user:", updatedUser);

    // Delete a user
    await User.deleteOne({ name: "John Doe" });
    console.log("User deleted successfully");
  } catch (err) {
    console.error("Error in CRUD operations:", err);
  } finally {
    // Close the MongoDB connection when done
    mongoose.connection.close();
  }
};

runCRUDOperations();
