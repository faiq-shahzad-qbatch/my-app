// Utility function to process an array with concurrency limit
function processWithConcurrency(array, predicate, concurrencyLimit = 5) {
  let currentIndex = 0;

  function processNext() {
    if (currentIndex >= array.length) {
      // All elements processed, return a resolved promise
      return Promise.resolve();
    }

    const currentElement = array[currentIndex];
    currentIndex++;

    return predicate(currentElement).then(() => {
      return processNext();
    });
  }

  const concurrencyPromises = [];

  for (let i = 0; i < concurrencyLimit && i < array.length; i++) {
    concurrencyPromises.push(processNext());
  }

  return Promise.all(concurrencyPromises);
}

// Sample predicate function
function predicateFunction(number) {
  return new Promise((resolve) => {
    // Simulate some asynchronous processing
    setTimeout(() => {
      console.log("Processed element:", number);
      resolve();
    }, Math.random() * 1000); // Random delay between 0 and 1000 milliseconds
  });
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Process elements of the array with a concurrency limit of 3
processWithConcurrency(myArray, predicateFunction, 5)
  .then(() => {
    console.log("All elements processed.");
  })
  .catch((error) => {
    console.error("Error:", error);
  });
