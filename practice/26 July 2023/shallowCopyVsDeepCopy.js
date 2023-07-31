const _ = require("lodash");

// const originalArray = [1, 2, [3, 4]];
// const shallowCopy = [...originalArray];

// shallowCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [99, 4]] (originalArray is also affected)

// const originalArray = [1, 2, [3, 4]];
// const deepCopy = _.cloneDeep(originalArray);

// deepCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [3, 4]] (originalArray remains unchanged)

// const originalArray = [1, 2, [3, 4]];
// const deepCopy = JSON.parse(JSON.stringify(originalArray));

// deepCopy[2][0] = 99;
// console.log(originalArray); // Output: [1, 2, [3, 4]] (originalArray remains unchanged)

// let str1 = "Hello";
// let str2 = str1; // A copy of the value is made
// str2 = "World";

// console.log(str1); // Output: "Hello" (original string is unchanged)
// console.log(str2); // Output: "World" (new string is assigned to str2)

const obj = {
  name: "Faiq",
  age: 23,
  address: {
    street: {
      firstLine: "P-37 Fareed Town",
      secondLine: "Dhudhiwala, Jaranwala Road",
    },
    city: "Faisalabad",
  },
};

// const obj2 = { ...obj }; // shallow copy of refrenced objects
// const obj2 = JSON.parse(JSON.stringify(obj)); //deep copy
const obj2 = _.cloneDeep(obj); // deep copy using lodash

obj2.name = "Shahzad";
obj2.address.street.firstLine = "P-37 & P-38 Fareed Town";

console.log(obj);
console.log(obj2);
