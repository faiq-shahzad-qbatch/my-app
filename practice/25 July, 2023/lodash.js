// Import lodash functions
const _ = require("lodash");

// Example 1: Working with arrays
const numbers = [1, 2, 3, 4, 5];

// Use `map` to create a new array with doubled values
const doubledNumbers = _.map(numbers, (num) => num * 2);
console.log("Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Use `filter` to get even numbers from the array
const evenNumbers = _.filter(numbers, (num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

// Example 2: Working with objects
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

// Use `pick` to select specific properties from the object
const selectedProperties = _.pick(person, ["name", "age"]);
console.log("Selected Properties:", selectedProperties); // Output: { name: 'John Doe', age: 30 }

// Example 3: Working with strings
const text = "Hello, lodash!";

// Use `startsWith` to check if the string starts with a specific substring
const startsWithHello = _.startsWith(text, "Hello");
console.log("Starts with Hello:", startsWithHello); // Output: true

// Use `toUpper` to convert the string to uppercase
const uppercaseText = _.toUpper(text);
console.log("Uppercase Text:", uppercaseText); // Output: "HELLO, LODASH!"
