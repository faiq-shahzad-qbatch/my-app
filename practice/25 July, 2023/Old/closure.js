function outer() {
  const x = 10;

  function inner() {
    console.log(x); // The inner function forms a closure and retains access to the variable x.
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // Output: 10
