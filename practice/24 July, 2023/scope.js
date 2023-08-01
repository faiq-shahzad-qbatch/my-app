var globalVar = "I am global"; // Global Scope

function exampleFunction() {
  var functionVar = "I am inside a function"; // Function Scope
  if (true) {
    let blockVar = "I am inside a block"; // Block Scope
    const constantVar = "I am constant"; // Block Scope
  }
  console.log(globalVar); // Output: "I am global"
  console.log(functionVar); // Output: "I am inside a function"
  //   console.log(blockVar); // Error: blockVar is not defined (block scope)
  //   console.log(constantVar); // Error: constantVar is not defined (block scope)
}

exampleFunction();
console.log(globalVar); // Output: "I am global"
// console.log(functionVar); // Error: functionVar is not defined (function scope)
// console.log(blockVar); // Error: blockVar is not defined (block scope)
// console.log(constantVar); // Error: constantVar is not defined (block scope)
