// Import the required libraries and functions
const { expect } = require("chai");

// Function to test
function add(a, b) {
  return a + b;
}

// Test cases using Chai assertions

// Test case 1: Check if the function returns the correct sum
const result1 = add(2, 3);
expect(result1).to.equal(5);

// Test case 2: Check for another sum
const result2 = add(10, 20);
expect(result2).to.equal(30);

// Test case 3: Check if the function returns a number
const result3 = add(1, 2);
expect(result3).to.be.a("number");

console.log("All test cases passed!");
