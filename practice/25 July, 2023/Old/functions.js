function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: "Hello, Guest!"
greet("John"); // Output: "Hello, John!"

// REST params

function sum(...numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Arguments

function sum2() {
  let result = 0;
  for (const num of arguments) {
    result += num;
  }
  return result;
}

console.log(sum2(1, 2, 3, 4)); // Output: 10
