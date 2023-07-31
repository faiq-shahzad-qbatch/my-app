// Create a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set(1, "One");
myMap.set(true, "Yes");

// Retrieving values using keys
console.log(myMap.get("name")); // Output: 'John'
console.log(myMap.get(1)); // Output: 'One'
console.log(myMap.get(true)); // Output: 'Yes'

// Checking if a key exists in the Map
console.log(myMap.has(1)); // Output: true

// Deleting a key-value pair from the Map
myMap.delete(1);

// Size of the Map
console.log(myMap.size); // Output: 2
