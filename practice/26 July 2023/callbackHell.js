// Example of Callback Hell (Deeply nested and less readable)
function foo(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function foo2(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function foo3(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

foo(() => {
  foo2(() => {
    foo3(() => {
      console.log("foo3 executed after: ", Date.now() - startingTime);
    });
  });
});

const startingTime = Date.now();

console.log("Reached end of code!");
