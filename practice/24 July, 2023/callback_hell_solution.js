function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function asyncOperation3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function asyncOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
    // More sequential async operations...

    console.log("All functions executed!");
  } catch (error) {
    // Handle errors
  }
}

asyncOperations();
