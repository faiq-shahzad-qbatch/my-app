// function modifyValue(value) {
//   value = 42;
//   console.log(value); // Output: 42
// }

// let num = 10;
// modifyValue(num);
// console.log(num); // Output: 10 (original value remains unchanged)

function modifyObject(obj) {
  obj.prop = "modified";
  console.log(obj); // Output: { prop: "modified" }
}

let originalObj = { prop: "original" };
console.log(originalObj);
modifyObject(originalObj);
console.log(originalObj); // Output: { prop: "modified" } (original object is modified)
