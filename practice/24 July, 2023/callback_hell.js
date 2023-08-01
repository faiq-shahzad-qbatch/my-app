async function asyncOperation1(callback) {
  setTimeout(() => {
    console.log("1");
    callback();
  }, 2000);
}

async function asyncOperation2(callback) {
  setTimeout(() => {
    console.log("2");
    callback();
  }, 2000);
}

async function asyncOperation3(callback) {
  setTimeout(() => {
    console.log("3");
    callback();
  }, 2000);
}

asyncOperation1(function (response1) {
  // Callback of asyncOperation1
  asyncOperation2(function (response2) {
    // Callback of asyncOperation2
    asyncOperation3(function (response3) {
      setTimeout(() => {
        console.log("4");
      }, 2000);
    });
  });
});
