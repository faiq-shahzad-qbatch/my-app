// function* myGenerator() {
//   yield "My";
//   yield "name";
//   yield "is";
//   yield "Faiq";
// }

// const generator = myGenerator();

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// // console.log(generator.next("Stopped!"));
// // console.log(generator.next().value);

// --section--

// function* asyncGenerator() {
//   yield new Promise((resolve) => setTimeout(() => resolve(10), 1000));
//   yield new Promise((resolve) => setTimeout(() => resolve(20), 1000));
//   yield new Promise((resolve) => setTimeout(() => resolve(30), 1000));
// }

// async function consumeAsyncGenerator() {
//   const generator = asyncGenerator();

//   const result1 = await generator.next().value;
//   console.log(result1); // Output: 10

//   const result2 = await generator.next().value;
//   console.log(result2); // Output: 20

//   const result3 = await generator.next().value;
//   console.log(result3); // Output: 30
// }

// consumeAsyncGenerator();

// --section--

// const myObject = { a: 1, b: 2, c: 3 };

// function* keysGenerator(obj) {
//   for (const key in obj) {
//     yield key;
//   }
// }

// const keysIterator = keysGenerator(myObject);

// console.log(keysIterator.next().value); // Output: "a"
// console.log(keysIterator.next().value); // Output: "b"
// console.log(keysIterator.next().value); // Output: "c"
// console.log(keysIterator.next().value); // Output: undefined

// --section--

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function* asyncTaskGenerator() {
//   yield delay(1000);
//   yield delay(2000);
//   yield delay(3000);
// }

// async function runAsyncTask() {
//   const asyncTask = asyncTaskGenerator();
//   await asyncTask.next().value;
//   console.log("Task 1 executed after 1000 ms");
//   await asyncTask.next().value;
//   console.log("Task 2 executed after 2000 ms");
//   await asyncTask.next().value;
//   console.log("Task 3 executed after 3000 ms");
// }

// runAsyncTask();

// --section--

// function* streamProcessor(dataArray) {
//   for (const data of dataArray) {
//     yield processData(data);
//   }
// }

// function processData(data) {
//   return data.toUpperCase();
// }

// const dataStream = ["hello", "world", "generator"];
// const processedStream = streamProcessor(dataStream);

// console.log(processedStream.next().value); // Output: "HELLO"
// console.log(processedStream.next().value); // Output: "WORLD"
// console.log(processedStream.next().value); // Output: "GENERATOR"
// console.log(processedStream.next().value); // Output: undefined

// --section--

// function* taskGenerator() {
//   console.log("Task 1");
//   yield;
//   console.log("Task 2");
//   yield;
//   console.log("Task 3");
// }

// const taskGen = taskGenerator();

// taskGen.next(); // Output: Task 1
// taskGen.next(); // Output: Task 2
// taskGen.next(); // Output: Task 3

// --section--

function* filterAndMapGenerator(dataArray, filterFn, mapFn) {
  for (const item of dataArray) {
    if (filterFn(item)) {
      yield mapFn(item);
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredAndMapped = filterAndMapGenerator(
  numbers,
  (num) => num % 2 === 0,
  (num) => num * 2,
);

console.log([...filteredAndMapped]); // Output: [4, 8, 12, 16, 20]
