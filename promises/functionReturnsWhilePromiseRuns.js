function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

function doSomething() {
  fetchData(); // Function that returns a Promise

  console.log("Function call completed!"); // This will be printed immediately

  return;
}

doSomething(); // program will keep running until the promise is resolved but we won't be able to do anything with it's result