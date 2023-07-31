// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function predicateFunction(number, delay) {
  return new Promise((resolve) => {
    // const delay = getRandomNumber(1000, 5000);
    setTimeout(() => {
      // console.log(`Resolved ${number}, Delay: ${delay}`);
      resolve(number);
    }, delay);
  });
}

async function utilityFunction(array, predicate, limit = 5) {
  const promises = [];

  for (let i = 0; i < array.length && i < limit; i++) {
    promises.push(predicate(myArray[i], Math.random() * 100));
  }

  for (let i = 5; i < myArray.length; i++) {
    const response = await Promise.any(promises);
    console.log(response);
    // console.log(promises);
    promises.shift();
    // const delay = getRandomNumber(1000, 5000);
    promises.push(predicate(array[i], Math.random() * 100));
  }

  const response = await Promise.all(promises);
  console.log(response);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

utilityFunction(myArray, predicateFunction, 5);
