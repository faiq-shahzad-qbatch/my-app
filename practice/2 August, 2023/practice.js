// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// async function fetchDataFromServer(value) {
//   await delay(1000);

//   return value;
// }

// const promise1 = fetchDataFromServer(1);
// const promise2 = fetchDataFromServer(2);
// const promise3 = fetchDataFromServer(3);

// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// //macrotask
// setTimeout(() => {
//   console.log("1");
// }, 0);

// //microtask
// Promise.resolve("2").then((data) => {
//   console.log(data);
// });

// //sync
// console.log("3");

// function innerFunction() {
//   throw new Error("Error in innerFunction!");
// }

// function middleFunction() {
//   innerFunction();
// }

// function outerFunction() {
//   middleFunction();
// }

// try {
//   outerFunction();
// } catch (error) {
//   console.error("Error:", error.message);
//   console.error("Stack trace:", error.stack);
// }

// Execption handling

// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "CustomError";
//   }
// }

// function divide(a, b) {
//   if (b == 0) {
//     throw new CustomError("Cannot divide by zero!");
//   }

//   return a / b;
// }

// // const result = divide(10, 0);
// // console.log(result);

// try {
//   const result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   console.log("Error name:", error.name);
//   console.log("Error message:", error.message);
//   console.log("Error stack:", error.stack);
// }

// console.log("After try/catch");

// Promises

// function fetchDataFromServer(
//   successValue = true,
//   dataValue = { name: "Faiq", age: 23 },
//   delayValue = 1000
// ) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = successValue;
//       const data = dataValue;
//       if (success) resolve(data);
//       else reject(new Error("Data not found!"));
//     }, delayValue);
//   });
// }

// async function asyncFunction() {
//   try {
//     const response = await fetchDataFromServer(false);
//     console.log(response);
//   } catch (error) {
//     console.log("Error name:", error.name);
//     console.log("Error message:", error.message);
//     console.log("Error stack:", error.stack);
//   }
// }

// asyncFunction();

// const promise1 = fetchDataFromServer(true, 1);
// const promise2 = fetchDataFromServer(true, 2);
// const promise3 = fetchDataFromServer(true, 3);

// Promise.allSettled([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// fetchDataFromServer(true)
//   .then(async (data) => {
//     console.log("Received data: ", data);

//     await fetchDataFromServer(false)
//       .then((data) => {
//         console.log("Received data: ", data);
//       })
//       .catch((error) => {
//         console.log("Inner 1");
//         console.log(error.message);
//       })
//       .finally(async () => {
//         await fetchDataFromServer(false)
//           .then((data) => {
//             console.log("Received data: ", data);
//           })
//           .catch((error) => {
//             console.log("Inner 2");
//             console.log(error.message);
//           });
//       });

//     return data;
//   })
//   .then((data) => {
//     console.log("Received data again: ", data);
//   })
//   .catch((error) => {
//     console.log("Outer 1");
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log("Fetch complete!");

//     return Promise.reject("Error thrown by finally!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Callbacks

// function fetchDataFromServer(cb) {
//   setTimeout(() => {
//     const data = { name: "Faiq", age: 23 };
//     cb(data);
//   }, 1000);
// }

// fetchDataFromServer((data) => {
//   console.log("Resolved data:", data);
// });
