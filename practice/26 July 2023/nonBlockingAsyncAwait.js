function simulateAsyncTask(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Async task completed after ${ms} milliseconds.`);
    }, ms);
  });
}

async function exampleAsyncFunction() {
  try {
    console.log("Start of the async function.");
    const result1 = await simulateAsyncTask(2000);
    console.log(result1);

    const result2 = await simulateAsyncTask(1000);
    console.log(result2);

    console.log("End of the async function.");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

exampleAsyncFunction();
console.log("Main thread continues execution.");
