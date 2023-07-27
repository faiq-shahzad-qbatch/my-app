function predicateFunction(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, delay);
  });
}

async function utilityFunction(array, predicate, concurrencyLimit = 5) {
  function* promiseGenerator(array) {
    for (const element of array) {
      yield predicate(element)
        .then((response) => {
          console.log(`Processes element: ${element}`);
          generator.next();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  const generator = promiseGenerator(myArray);

  for (let i = 0; i < array.length && i < concurrencyLimit; i++) {
    generator.next();
  }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

utilityFunction(myArray, predicateFunction, 4);
