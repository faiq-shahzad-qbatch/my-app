function predicateFunction(number, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolved ${number}, Delay: ${delay}`);
      resolve(number);
    }, delay);
  });
}

async function utilityFunction(array, predicate, limit = 5) {
  const promises = [];

  for (let i = 0; i < array.length && i < limit; i++) {
    promises.push(predicate(myArray[i]));
  }

  for (let i = limit; i < myArray.length; i++) {
    await Promise.any(promises);
    promises.shift();
    promises.push(predicate(array[i]));
  }
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

utilityFunction(myArray, predicateFunction, 2);
