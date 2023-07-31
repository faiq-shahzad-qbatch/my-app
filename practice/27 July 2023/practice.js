// Parent object (prototype)
const animal = {
  makeSound: function () {
    return "Unknown sound";
  },
};

// Child object
const cat = {
  __proto__: animal, // Set 'animal' as the prototype of 'cat'
  makeSound: function () {
    return "Meow";
  },
};

// Child object
const dog = {
  __proto__: animal, // Set 'animal' as the prototype of 'dog'
  makeSound: function () {
    return "Woof";
  },
};

console.log(cat.makeSound()); // Output: "Meow"
console.log(dog.makeSound()); // Output: "Woof"

// // const { cloneDeep } = require("lodash");

// // function myFunction() {
// //   console.log("Hello, World!");
// // }

// // const originalObject = { a: 1, b: 2, c: 3, d: myFunction };

// // const shallowCopy = cloneDeep(originalObject);

// // console.log(originalObject); // Output: { a: 1, b: 2, c: 3 }
// // console.log(shallowCopy); // Output: { a: 99, b: 2, c: 3 }

// // const person = {
// //   greet: function () {
// //     return console.log(`Hello my name is ${this.name}`);
// //   },
// // };

// // const user = Object.create(person);
// // user.name = "Faiq";

// // user.greet();

// const myObject = { a: 1, b: 2, c: 3, d: { e: 5, f: 6 } };

// Object.freeze(myObject);

// myObject.newItem = 10;

// console.log(myObject);

// // // Convert 'myObject' to an array of [key, value] pairs
// // const entries = Object.entries(myObject);

// // console.log(entries); // Output: [['a', 1], ['b', 2], ['c', 3]]

// // const keys = Object.keys(myObject);

// // console.log(keys);

// // const values = Object.values(myObject);

// // console.log(values);
