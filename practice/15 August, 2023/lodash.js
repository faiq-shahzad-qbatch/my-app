const _ = require("lodash");

// //currying
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(add(1)(2));

// // normal
// console.log(((a, b) => a + b)(1, 2));

// //currying
// console.log(
//   (
//     (a) => (b) =>
//       a + b
//   )(1)(2),
// );

// const zipped = _.zip([1, 2], ["a", "b"]);
// const unZipped = _.unzip(zipped);
// console.log(zipped);
// console.log(unZipped);

// const words = ["hello", "world", "how", "are", "you"];

// console.log(_.map(words, (element, index) => element.toUpperCase()));
// console.log(_.filter(words, (element) => element.length > 3));
// console.log(words);

// console.log(_.orderBy(words, (word) => word.length));

// const data = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Carol", age: 25 },
//   { name: "David", age: 30 },
// ];

// console.log(_.groupBy(data, ({ age }) => age));
// console.log(_.orderBy(data, [({ age }) => age], ["desc"]));
