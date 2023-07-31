// const originalArray = [1, 2, 3];
// const newArray = [...originalArray]; // this performs a deep copy which means the original array is not affected
// originalArray[0] = 4;
// console.log(newArray); // Output: [1, 2, 3]

// const array1 = [1, 2, 3];
// const array2 = [4, 5];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray); // Output: [1, 2, 3, 4, 5]

// const array = [1, 2, 3];
// const newArray = [...array, 4, 5];
// console.log(newArray); // Output: [1, 2, 3, 4, 5]

// function sum(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// const result = sum(...numbers); // Equivalent to sum(1, 2, 3)
// console.log(result); // Output: 6

const object = { name: "John", nestedObject: { name: "Faiq", age: 23 } };
const newObject = { ...object, age: 30 };
newObject.nestedObject.name = "Zain";
console.log(object);
