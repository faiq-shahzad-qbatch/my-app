function foo(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

foo(() => {
  console.log("foo executed!");
});

console.log("Reached end of code!");
