// Callback

function fetchDataFromServerCallback(callback) {
  // Simulate a network request
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data);
  }, 1000);
}

// Usage of the fetchDataFromServer function with a callback
fetchDataFromServerCallback((result) => {
  console.log(result); // Output: { name: "John", age: 30 }
});

// Promise

function fetchDataFromServerPromise() {
  return new Promise((resolve, reject) => {
    // Simulate a network request
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
}

// Usage of the fetchDataFromServer function with a Promise
fetchDataFromServerPromise()
  .then((result) => {
    console.log(result); // Output: { name: "John", age: 30 }
  })
  .catch((error) => {
    console.error(error);
  });
