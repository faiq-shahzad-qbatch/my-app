function sum(x) {
  x[0] = 5;
}

let x = [1, 2];

console.log(x[0]);
sum(x);

console.log(x[0]);
