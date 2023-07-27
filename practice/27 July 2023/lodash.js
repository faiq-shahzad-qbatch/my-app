// const _ = require("lodash");

// const arr = [1, 2, 3, 4];

// const a = arr.shift();
// const b = arr.shift();

// console.log(arr);
// console.log(a);
// console.log(b);

// // const size = 12; // Change this value to determine the size of the array
// // const elements = [1, 2, 3]; // Elements to repeat

// // const initializedArray = _.times(
// //   size,
// //   (index) => elements[index % elements.length],
// // );
// // console.log(initializedArray); // Output: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]

// // console.log(_.zip(["a", "b"], [1, 2], [true, false]));

// // const sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];

// // const result = _.sortedUniq(sortedArray);

// // console.log(result);

// // const posts = [
// //   { id: "1abc", title: "First blog post", content: "..." },
// //   { id: "2abc", title: "Second blog post", content: "..." },
// //   // more blog posts
// //   { id: "34abc", title: "The blog post we want", content: "..." },
// //   // even more blog posts
// // ];

// // const posts2 = _.keyBy(posts, "id");

// // const post = posts2["34abc"];

// // console.log(post);

// // console.log(_.times(3, String));

// // const foo = { a: "a property" };

// // const bar = { b: 4, c: "an other property" };

// // const result = _.assign({ name: "Faiq" }, foo, bar);

// // console.log(result);

// // const array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];

// // const data = ["name", "faiq", "name2", "zain"];

// // const chunks = _.chunk(data, 2);

// // console.log(_.fromPairs(chunks));

// // const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // const numbers = [1, 2, 3, 4, 5, [1, 2, [1, 2]]];

// // console.log(_.flatten(numbers));

// // const deepCopy = _.cloneDeep(numbers);

// // deepCopy[5][0] = 99;
// // console.log(numbers);
// // console.log(deepCopy);

// // const squaredNumbers = _.map(numbers, (num) => num * num);
// // console.log(squaredNumbers);

// // const users = [
// //   { id: 1, name: "John", age: 25 },
// //   { id: 2, name: "Alice", age: 30 },
// //   { id: 3, name: "Bob", age: 22 },
// // ];

// // const adults = _.filter(users, (user) => user.age > 22);
// // console.log(adults);

// // const numbersSum = _.reduce(numbers, (acc, number) => acc + number, 0);
// // console.log(numbersSum);

// // _.forEach(numbers, (number) => {
// //   console.log(`The number is: ${number}`);
// // });

// // const user = _.find(users, { name: "John" });
// // console.log(user);

// // const sortedUsers = _.sortBy(users, "name");
// // console.log(sortedUsers);

// // function foo() {
// //   console.log("Hello, World!");
// // }

// // const debouncedFoo = _.debounce(foo, 1000);

// // debouncedFoo();

// // const obj1 = { a: 1, b: 2 };
// // const obj2 = { b: 3, c: 4 };

// // const mergedObj = _.merge(obj1, obj2);
// // console.log(mergedObj);

// // console.log(_.sum(numbers));

// // const chunks = _.chunk(numbers, 2);

// // console.log(chunks);

// // console.log(_.groupBy(["one", "two", "three"], (string) => string.length));
// // console.log(_.groupBy(["one", "two", "three"], "length"));

// // const users = [
// //   { user: "fred", age: 48 },
// //   { user: "barney", age: 36 },
// //   { user: "fred", age: 40 },
// //   { user: "barney", age: 34 },
// // ];

// // console.log(_.sortBy(users, ["user", "age"]));
// // console.log(_.orderBy(users, ["user", "age"], ["asc", "desc"]));

// // console.log(_.sumBy(numbers, (num) => num > 1));

// // console.log(_.dropRight(numbers, 1));

// // console.log(_.fill(numbers, "*", 0, 3));

// // console.log(_.findIndex(users, { id: 3 }));
