function predicateFunction(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, delay);
  });
}

function utilityFunction(array, predicate, limit = 5) {
  function* promiseGenerator(array) {
    for (const element of array) {
      yield predicate(element).then((response) => {
        console.log(response);
        return generator.next();
      });
    }
  }

  const generator = promiseGenerator(myArray);

  for (let i = 0; i < array.length && i < limit; i++) {
    generator.next();
  }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

utilityFunction(myArray, predicateFunction, 4);
