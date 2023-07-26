const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(30);
  }, 1000);
});

function simulateCallbackHell() {
  let startingTime = new Date();

  promise
    .then(() => {
      promise2
        .then(() => {
          promise3
            .then(() => {
              console.log(
                "Time taken by simulateCallbackHell: ",
                new Date() - startingTime,
              );
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

async function simulateAsyncAwait() {
  try {
    let startingTime = new Date();

    await promise;

    await promise2;

    await promise3;

    console.log(
      "Time taken by simulateAsyncAwait: ",
      new Date() - startingTime,
    );
  } catch (err) {
    console.log(err);
  }
}

function simulateChaining() {
  let startingTime = new Date();

  promise
    .then(() => {
      return promise2;
    })
    .then(() => {
      return promise3;
    })
    .then(() => {
      console.log(
        "Time taken by simulateChaining: ",
        new Date() - startingTime,
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function simulateAll() {
  let startingTime = new Date();

  Promise.all([promise, promise2, promise3]).then(() => {
    console.log("Time taken by simulateAll: ", new Date() - startingTime);
  });
}

function promiseFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
}

function promiseFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
}

function promiseFunction3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(30);
    }, 1000);
  });
}

function simulateCallbackHellFunction() {
  let startingTime = new Date();

  promiseFunction()
    .then(() => {
      promiseFunction2()
        .then(() => {
          promiseFunction3()
            .then(() => {
              console.log(
                "Time taken by simulateCallbackHell: ",
                new Date() - startingTime,
              );
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

async function simulateAsyncAwaitFunction() {
  try {
    let startingTime = new Date();

    await promiseFunction();

    await promiseFunction2();

    await promiseFunction3();

    console.log(
      "Time taken by simulateAsyncAwait: ",
      new Date() - startingTime,
    );
  } catch (err) {
    console.log(err);
  }
}

function simulateChainingFunction() {
  let startingTime = new Date();

  promiseFunction()
    .then(() => {
      return promiseFunction2();
    })
    .then(() => {
      return promiseFunction3();
    })
    .then(() => {
      console.log(
        "Time taken by simulateChaining: ",
        new Date() - startingTime,
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function simulateAllFunction() {
  let startingTime = new Date();

  Promise.all([promiseFunction(), promiseFunction2(), promiseFunction3()]).then(
    () => {
      console.log("Time taken by simulateAll: ", new Date() - startingTime);
    },
  );
}

// simulateCallbackHell();
// simulateAsyncAwait();
// simulateChaining();
// simulateAll();

// simulateCallbackHellFunction();
// simulateAsyncAwaitFunction();
// simulateChainingFunction();
// simulateAllFunction();
