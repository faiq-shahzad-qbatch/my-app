// Using rest parameter to collect multiple arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
