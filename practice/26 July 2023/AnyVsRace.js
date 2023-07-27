function createTimeoutPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${timeout}ms`);
    }, timeout);
  });
}

function createTimeoutPromise2(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Promise rejected after ${timeout}ms`);
    }, timeout);
  });
}

const promise1 = createTimeoutPromise2(1000);
const promise2 = createTimeoutPromise(2000);
const promise3 = createTimeoutPromise(3000);

const promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((result) => {
    console.log("Any: ", result);
  })
  .catch((error) => {
    console.log("Any: ", error);
  });

Promise.race(promises)
  .then((result) => {
    console.log("Race: ", result);
  })
  .catch((error) => {
    console.log("Race: ", error);
  });

// const promise1 = createTimeoutPromise2(1000);
// const promise2 = createTimeoutPromise2(1000);

// promise1
//   .then((result) => {
//     promise2
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//         console.log("Inner catch");
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Outer catch");
//   });
