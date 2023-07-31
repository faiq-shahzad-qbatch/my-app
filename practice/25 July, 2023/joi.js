const Joi = require("joi");

// Define a validation schema
const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120).required(),
});

const data = {
  username: "john_doe",
  email: "john@example.com",
  age: 25,
};

// Validate the data against the schema
const result = schema.validate(data);

// Check if there are validation errors
if (result.error) {
  // Handle validation errors
  console.error(result.error.details);
} else {
  // Data is valid, proceed with processing
  console.log("Data is valid:", result.value);
}
