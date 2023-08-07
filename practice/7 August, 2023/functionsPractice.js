// every method

console.log([].every((x) => x)); // true
console.log([" "].every((x) => x)); // true
console.log([{}].every((x) => x)); // true
console.log([[]].every((x) => x)); // true
console.log([null].every((x) => x)); // false
console.log([undefined].every((x) => x)); // false
console.log([""].every((x) => x)); // false
console.log([0].every((x) => x)); // false
console.log([false].every((x) => x)); // false

// filter method
console.log([" "].filter((x) => x)); // [" "]
console.log([{}].filter((x) => x)); // [{}]
console.log([[]].filter((x) => x)); // [[]]
console.log([].filter((x) => x)); // []
console.log([null].filter((x) => x)); // []
console.log([undefined].filter((x) => x)); // []
console.log([""].filter((x) => x)); // []
console.log([0].filter((x) => x)); // []
console.log([false].filter((x) => x)); // []
