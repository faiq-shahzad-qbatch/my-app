const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved!");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved!");
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved!");
  }, 2000);
});

async function foo() {
  await Promise.all([promise1, promise2])
    .then((response) => {
      console.log("All promises resolved: ", response);
    })
    .catch((error) => {
      console.log(error.message);
    });

  promise3
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

foo();
