async function doSomethingAsync(callback) {
  setTimeout(() => {
    console.log("setTimeout has executed now executing callback function!");
    callback();
  }, 2000);
}

function handleCallback() {
  console.log("Callback function has been executed!");
}

doSomethingAsync(handleCallback);
