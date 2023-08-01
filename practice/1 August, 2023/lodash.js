const _ = require("lodash");

const array = undefined;

console.log(_.head(array));

// const numbers = [1, 2, 3, 4, 5];

// console.log(_.pullAllWith());

// var array = [
//   { dir: "left", code: 1 },
//   { dir: "left", code: 2 },
//   { dir: "right", code: 3 },
//   { dir: "right", code: 3 },
// ];

// console.log(_.keyBy(array, "dir"));
// console.log(_.groupBy(array, "dir"));
// console.log(_.countBy(array, "dir"));

// var users = [
//   { user: "fred", age: 48 },
//   { user: "barney", age: 34 },
//   { user: "fred", age: 40 },
//   { user: "barney", age: 36 },
// ];

// console.log(
//   _.sortBy(
//     users,
//     ({ user }) => user,
//     ({ age }) => age
//   )
// );

// console.log(
//   _.orderBy(users, [({ user }) => user, ({ age }) => age], ["desc", "desc"])
// );

// function func(data) {
//   requirements = data.requirements;

//   // return _.countBy(requirements, ({ req }) => {
//   //   return req;
//   // });
//   // return _.groupBy(requirements, ({ req }) => {
//   //   return req;
//   // });
//   // return _.keyBy(requirements, ({ req }) => {
//   //   return req;
//   // });

//   return requirements.reduce((result, { req }) => {
//     if (req < 32768) {
//       !result[req] ? (result[req] = 1) : result[req]++;
//     }
//     return result;
//   }, {});
// }

// function main() {
//   const data = require("./t7_HEIHACHI.json");
//   const result = func(data);
//   console.log(result);
// }

// main();

// const numbers = [1, 2, 3, 4, 5];
// const obj = { a: 1, b: 2 };

// _.forIn(numbers, (x) => {
//   console.log(x);
// });

// console.log(_.xor([2, 1], [2, 3]));

// const numbers = [1, 2, 3, 4, 5];

// console.log(_.without(numbers, 1, 2));
// console.log(numbers);

// var zipped = _.zip(["a", "b"], [1, 2], [true, false]);
// // => [['a', 1, true], ['b', 2, false]]

// console.log(_.unzip(zipped));
// // => [['a', 'b'], [1, 2], [true, false]]

// const dups = [1, 1, 2, 2, 3, 3];

// console.log(_.uniqWith(dups, (x, y) => x == y));

// const set1 = [1, 2, 3, 4];
// const set2 = [3, 4, 5, 6];

// console.log(_.union(set1, set2));

// const numbers = [1, 2, 3, 4, 5];

// console.log(_.takeWhile(numbers, (x) => {}));
// console.log(numbers);

// console.log(_.sortedUniq(numbers));

// console.log(_.sortedIndex(numbers, 2));
// console.log(_.sortedIndexBy(numbers, 2, (x) => x));
// console.log(_.sortedIndexOf([5, 4, 3, 2, 1], 2));

// const slice = _.slice(numbers, 1, 4);
// // slice[0] = 99;

// console.log(slice);
// console.log(numbers);

// console.log(_.remove(numbers, (x) => x > 2));

// var array = [1, 2, 3, 4];
// var pulled = _.pullAt(array, [0, 2]);

// console.log(array);
// console.log(pulled);

// const numbers = [1, 2, 3, 4, 5];

// console.log(_.pull(numbers, 2));
// console.log(_.pullAll(numbers, [2, 3]));
// console.log(_.pullAllBy(numbers, [2, 3], (x) => x));
// console.log(_.pullAllWith(numbers, [2, 3], (x, y) => x == y));

// console.log(_.join(Array.from("abc"), ", "));

// var users1 = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

// var users2 = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

// console.log(
//   _.intersectionWith(
//     users1,
//     users2,
//     ({ user: user1 }, { user: user2 }) => user1 == user2
//   )
// );

// console.log(_.intersection([1, 2], [2, 3]));
// console.log(_.intersectionBy([1, 2], [2, 3], (x) => x));

// console.log(_.indexOf([1, 2, 2, 4], 2, 0));

// console.log(
//   _.toPairs(
//     _.fromPairs([
//       ["a", 1],
//       ["b", 2],
//     ])
//   )
// );

// const array = [1, [2, [3, [4]]]];

// console.log(_.flatten(array));
// console.log(_.flattenDeep(array));
// console.log(_.flattenDepth(array, 2));

// var users = [
//   { user: "barney", active: true },
//   { user: "fred", active: false },
//   { user: "pebbles", active: false },
// ];

// console.log(_.find(users, ({ active }) => active == false));

// console.log(_.findIndex(users, ({ active }) => active == false));

// console.log(_.findLastIndex(users, ({ active }) => active == false));

// console.log(_.dropWhile(users, ({ active }) => active == true));
// console.log(_.dropRightWhile(users, ({ active }) => active == false));

// const numbers = [1, 2, 3, 4, 5];

// const dropSlice1 = _.drop(numbers, 2);

// const dropSlice2 = _.dropRight(numbers, 2);

// dropSlice1[0] = 99;

// console.log(numbers);

// console.log(dropSlice1);
// console.log(dropSlice2);

// console.log(_.differenceWith([1, 2, 3], [2, 3, 4], (x, y) => x == y));

// console.log(_.differenceBy([1, 2, 3], [2, 3, 4], (x) => x));

// console.log(_.difference([1, 2, 3], [2, 3, 4]));

// console.log(_.concat([1], 2, 3, 4));

// console.log(_.compact([0, 1, false, 2, "", 3, null, undefined]));

// const array = Array.from(Array(10), (_, index) => index + 1);

// console.log(_.chunk(array, 2));
