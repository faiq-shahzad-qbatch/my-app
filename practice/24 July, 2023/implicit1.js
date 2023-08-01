// Number + String -> String concatenation
let x = 5;
let str = "The value of x is: " + x; // "The value of x is: 5"
console.log(str);

// String - Number -> Number subtraction
let a = "10";
let b = 5;
let result = a + b; // 5 (a is implicitly converted to a number)
console.log(result)

// Comparison between different data types
let numValue = 42;
let strValue = "42";
console.log(numValue == strValue); // true (implicit type conversion during comparison)
