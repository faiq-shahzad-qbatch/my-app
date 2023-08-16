const _ = require("lodash");

function maxSlidingWindow(nums, k) {
  const maxNums = [];

  for (let i = 0; i < nums.length; i++) {
    let maxSoFar = nums[i];

    for (let j = i; j < nums.length && j < k; j++) {
      if (nums[j] > maxSoFar) maxSoFar = nums[j];
    }

    maxNums.push(maxSoFar);
  }

  return maxNums;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

// const string1 = "listen";
// const string2 = "silent";

// console.log(
//   string1.split("").sort().join("") === string2.split("").sort().join(""),
// );

// const array = [1, 2, 3, 4, 5];
// const result = _.difference(array, [2]);

// console.log(array);
// console.log(result);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   console.log(`Hello! My name is ${this.name} and I am ${this.age} years old!`);
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello! My name is ${this.name} and I am ${this.age} years old!`,
//     );
//   }
// }

// const person = new Person("John Doe", 25);

// person.greet();

// console.log("Hello, World! How are you?".split(" ").reverse().join(" "));

// const array = [5, 5, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1];

// function findNSmallest(array, n) {
//   const sortedUniqueArray = _.sortedUniq(array.sort());
//   return sortedUniqueArray[n - 1];
// }

// console.log(findNSmallest(array, 2));

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [5, 6, 7, 8, 9];

// console.log(array1.filter((element) => array2.includes(element)));

// function promiseMaker(element) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(element);
//     }, 1000);
//   });
// }

// const users = [
//   { id: 1, name: "Alice", age: 28 },
//   { id: 2, name: "Bob", age: 32 },
//   { id: 3, name: "Charlie", age: 28 },
// ];

// // const obj = { id: 1, name: "Alice", age: 28 };

// console.log("1");

// async function asyncFunc() {
//   for (let element of users) {
//     const result = await promiseMaker(element);
//     console.log(result);
//   }
// }

// asyncFunc();

// // _.forEach(users, async (element) => {
// //   const result = await promiseMaker(element);
// //   console.log(result);
// // });

// // users.forEach(async (element) => {
// //   const result = await promiseMaker(element);
// //   console.log(result);
// // });

// console.log("2");

// const arrayToCompact = [0, 1, false, 2, "", 3, -0];
// console.log(_.compact(arrayToCompact));
// console.log(arrayToCompact);

// function firstNonRepeatedCharacter(string) {
//   const characterMap = new Map();
//   for (let character of string) {
//     const value = characterMap.get(character) ?? 0;
//     characterMap.set(character, value + 1);
//   }

//   for (let character of string) {
//     if (characterMap.get(character) === 1) return character;
//   }

//   return null;
// }

// console.log(firstNonRepeatedCharacter("stress"));

// remove duplicates
// console.log(Array.from(new Set([1, 1, 2, 2])));

// reverse string
// console.log("Hello".split("").reverse().join(""));

// max
// console.log(Math.max(1, 2, 3, 4, 5));
