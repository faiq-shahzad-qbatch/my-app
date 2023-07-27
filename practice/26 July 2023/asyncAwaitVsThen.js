function asyncFunction1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Response after 2s!");
    }, 2000);
  });
}

function asyncFunction2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Response after 1s!");
    }, 1000);
  });
}

function myFunction() {
  asyncFunction1()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  asyncFunction2()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function myFunctionAsync() {
  console.log("asyncFunction1 called!");
  const response1 = await asyncFunction1();

  if (response1) {
    console.log(response1);
  }

  console.log("asyncFunction2 called!");
  const response2 = await asyncFunction2();

  if (response2) {
    console.log(response2);
  }
}

// myFunction();
// console.log("myFunction called!");

myFunctionAsync();
console.log("myFunctionAsync called!");
