(function () {
  const message = "Hello from the IIFE!";
  console.log(message); // Output: "Hello from the IIFE!"
})();

// Outside the IIFE, "message" variable is not accessible
// console.log(message); // Throws ReferenceError: message is not defined
