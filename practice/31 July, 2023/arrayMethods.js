// const arr = [];

// obj = { name: "Faiq" };

// const key = "age";

// obj[key] = 23;

// // // define a single property of obj object
// // Object.defineProperty(obj, "age", {
// //   value: 23,
// //   writable: true,
// //   enumerable: true,
// //   configurable: true,
// // });

// obj2 = Object.assign({}, obj);

// // obj2 = Object.create(obj);

// console.log(obj2);

// // defining an array
// let prices = [689, 100, 4577, 56];

// // passing locales and options:
// // using United States Dollar currency string format
// let resultingString = prices.toLocaleString("en-US", {
//   style: "currency",
//   currency: "USD",
// });

// console.log(Array.from(resultingString.toString()));

// let prime_numbers = [2, 3, 5, 7, 9, 11];
// let deepCopy = JSON.parse(JSON.stringify(prime_numbers));

// // replace 1 element from index 4 by 13
// let removedElement = prime_numbers.splice(1, 3, 99, 100, 101);
// console.log(deepCopy);
// console.log(prime_numbers);
// console.log(removedElement);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]

// let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// // sort the city array in ascending order
// let sortedArray = city.sort();
// console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

// let numbers = [2, 3, 5, 99, 101, 32, 7, 11, 13, 17];

// console.log(numbers.sort((a, b) => a - b));

// // create another array by slicing numbers from index 3 to 5
// let newArray = numbers.slice(0);
// console.log(newArray);
// console.log(numbers);

// Output: [ 7, 11, 13 ]

// let cities = [1, 2, 3, 4, 5];

// // remove the last element
// let removedCity = cities.unshift({ a: 1 });

// console.log(cities); // ["Madrid", "New York", "Kathmandu"]
// console.log(removedCity); // Paris

// console.log(Array.of("a", "b", "c"));

// const numbers = [1, 2, 3, 4, 5];

// console.log(Array.isArray(numbers));

// console.log(["JavaScript", "Java", "C", "Java"].lastIndexOf("Java"));

// console.log(Array.from({ length: 10 }, (_, index) => index + 1));

// // 3 nested arrays
// let numbers = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// console.log(numbers.flatMap((element) => [element ** 2]));

// reducing nesting by flattening the array to depth 2
// let flattenArray = numbers.flat(2);

// // new flatten array
// console.log(flattenArray);

// let numbers = [1, 3, 4, 9, 8];

// console.log(numbers.find((element) => element % 2 == 0));

// console.log(numbers.findIndex((element) => element % 2 == 0));

// const testArray = ["faiq", 1, "1", null, 0, undefined, false, "", " "];

// console.log(
//   testArray.filter((x) => {
//     return x;
//   })
// );

// console.log(
//   testArray.map((x) => {
//     return { key: x };
//   })
// );

// var prices = [651, 41, 4, 3, 6];

// console.log(prices.fill(99, 0, 4));

// const array = Array.from(Array(10), (_, index) => index + 1);

// console.log(array);
// console.log(array.copyWithin(0, 5));
