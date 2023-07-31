// Create a new Set
const mySet = new Set();

// Adding elements to the Set
mySet.add("apple");
mySet.add("banana");
mySet.add("apple"); // Duplicate 'apple' will be ignored

// Checking if an element exists in the Set
console.log(mySet.has("banana")); // Output: true

// Size of the Set
console.log(mySet.size); // Output: 2

// Deleting an element from the Set
mySet.delete("banana");

// Size of the Set after deletion
console.log(mySet.size); // Output: 1
