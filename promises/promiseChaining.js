// Asynchronous function that returns a Promise
function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Task 1 Done.");
      resolve(42);
    }, 1000);
  });
}

// Asynchronous function that takes a parameter and returns a Promise
function asyncTask2(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Task 2 Done.");
      resolve(param * 2);
    }, 2000);
  });
}

// Asynchronous function that takes a parameter and returns a Promise
function asyncTask3(param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Task 3 Done.");
      resolve(param + 10);
    }, 1500);
  });
}

// Chaining the Promises
asyncTask1()
  .then((result1) => {
    // return
    asyncTask2(result1); // Return a new Promise for chaining
    return 42;
  })
  .then((result2) => {
    return asyncTask3(result2); // Return another Promise for chaining
  })
  .then((finalResult) => {
    console.log("Final Result:", finalResult); // Output: Final Result: 104
  })
  .catch((error) => {
    console.error("Error:", error);
  });
