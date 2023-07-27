const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved promise after 2s");
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Resolved promise after 1s");
  }, 5000);
});

Promise.all([promise1, promise2]).then((response) => {
  console.log(response);
});

Promise.race([promise1, promise2]).then((response) => {
  console.log(response);
});

Promise.any([promise1, promise2]).then((response) => {
  console.log(response);
});
