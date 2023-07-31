function validAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Promise resolved!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 2000);
  });
}

function invalidAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("Promise resolved!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 2000);
  });
}

validAsyncFunction()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

invalidAsyncFunction()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });

async function test() {
  const response = await validAsyncFunction().catch((error) => {
    console.log(error.message);
  });

  if (response) {
    console.log(response);
  }
}

async function test2() {
  const response = await invalidAsyncFunction().catch((error) => {
    console.log(error.message);
  });

  if (response) {
    console.log(response);
  }
}

async function test3() {
  try {
    const response = await invalidAsyncFunction();
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

test(); // promise approach
test2(); //sir ali's approach
test3(); // my approach
