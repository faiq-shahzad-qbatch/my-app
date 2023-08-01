function outer() {
  const x = 10;

  function inner() {
    console.log(x); // The inner function can access the variable x from the outer function's scope.
  }

  inner();
}

outer(); // Output: 10
