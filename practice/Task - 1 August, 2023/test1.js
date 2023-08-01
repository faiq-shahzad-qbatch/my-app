// 1 Remove duplicates from an array. [1, 2, 2, 3, 4, 4, 5]
// 2 Find the second smallest number in an array. [2, 3, "4", 22, "b", 4]
// 3 Find the longest word in a sentence. "The quick brown fox jumps over the lazy dog"
// 4 Check if two strings are anagrams. "vvnn", "nvnv"
// 5 Find the missing number in sequence an array containing numbers from 1 to n.
// 6 Find the common elements between two arrays. [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// 7 Remove all falsy values from an array. [0, 1, '', 'hello', false, NaN, undefined, null]
// 8 How can I use Lodash's _.debounce() or _.throttle() to limit function calls in response to rapid events.
// 9 Implement a function to find the first non-repeated character in a string. 'stress'
// 10 How do I perform deep comparisons between objects

// 1.10

const _ = require("lodash");

const object1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const object2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const object3 = {
  name: "Jane",
  age: 25,
  address: {
    city: "Los Angeles",
    country: "USA",
  },
};

console.log(_.isEqual(object1, object2));
console.log(_.isEqual(object1, object3));

// 1.9

// const string = "sstrreess";

// const arrayOfString = Array.from(string);

// const countOfCharacters = _.countBy(arrayOfString, (x) => x);

// console.log(_.findKey(countOfCharacters, (x) => x == 1));

// 1.8

// function printText() {
//   console.log("Hello, World!");
// }

// const throttledFunction = _.throttle(printText, 1000);

// let number = 0;

// while (number < 10000) {
//   throttledFunction();
//   number++;
// }

// 1.7

// const array = [0, 1, "", "hello", false, NaN, undefined, null];

// console.log(_.compact(array));

// 1.6

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

// console.log(_.intersection(array1, array2));

// 1.5

// const array = [1, 2, 4, 5];

// const arrayForComparison = Array.from(
//   Array(array[array.length - 1]),
//   (_, index) => index + 1
// );

// console.log(_.difference(arrayForComparison, array));

// 1.4

// const string1 = "vvnn";
// const string2 = "nvnv";

// const arrayOfString1 = Array.from(string1);
// const arrayOfString2 = Array.from(string2);

// const result1 = _.difference(arrayOfString1, arrayOfString2);
// const result2 = _.difference(arrayOfString2, arrayOfString1);

// if (result1.length == 0 && result2.length == 0) {
//   console.log("The strings are anagrams!");
// } else {
//   console.log("The strings are not anagrams!");
// }

// console.log(result1);
// console.log(result2);

// 1.3

// const message = "The quick brown fox jumps over the lazy dog";

// const words = _.words(message);

// console.log(words);

// const longestWord = _.maxBy(words, (x) => x.length);

// console.log(longestWord);

// 1.1

// const array = [2, 3, null, 5, null, 0, "0", 10, undefined, "10", undefined];

// console.log(_.uniq(array));

// 1.2

// const array = [2, 3, "4", 22, "b", 4];

// const arrayWithNumbersOnly = _.filter(array, (x) => _.isNumber(x));

// const sortedArray = _.sortBy(arrayWithNumbersOnly);

// const secondMax = sortedArray[1];

// console.log(secondMax);

// 1.3
