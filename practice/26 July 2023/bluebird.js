const Promise = require("bluebird");

function predicateFunction(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(number);
      resolve(number);
    }, 1000);
  });
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Promise.map(myArray, predicateFunction, { concurrency: 5 })
  .then((results) => {
    console.log("All tasks completed:", results);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
