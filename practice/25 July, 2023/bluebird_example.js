// Import the bluebird library
const Promise = require("bluebird");

// Example asynchronous function using bluebird Promises
function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, e.g., a database query or an API call
    setTimeout(() => {
      const randomNumber = Math.random();

      // Resolve the Promise with a value if the operation is successful
      if (randomNumber > 0.5) {
        resolve(randomNumber);
      } else {
        // Reject the Promise with an error if the operation fails
        reject(new Error("Operation failed"));
      }
    }, 1000);
  });
}

// Using the asyncFunction with bluebird Promises
asyncFunction()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
