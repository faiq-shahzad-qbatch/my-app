const _ = require("lodash");

function predicateFunction(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, delay);
  });
}

async function utilityFunction(array, predicate, concurrencyLimit = 5) {
  const chunks = _.chunk(array, concurrencyLimit);

  for (const chunk of chunks) {
    const promises = [];

    for (const element of chunk) {
      promises.push(predicate(element));
    }

    try {
      const response = await Promise.all(promises);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

utilityFunction(myArray, predicateFunction, 4);
