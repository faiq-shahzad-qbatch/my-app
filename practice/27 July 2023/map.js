const _ = require("lodash");

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = _.map(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alice", age: 30 },
  { id: 3, name: "Bob", age: 22 },
];

const adults = _.filter(users, (user) => user.age > 22);
console.log(adults); // Output: [{ id: 1, name: 'John', age: 25 }, { id: 2, name: 'Alice', age: 30 }]
