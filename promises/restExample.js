function multiple(multiplier, ...theArgs) {
  return theArgs.reduce((sum, number) => (sum += multiplier * number), 0);
}

console.log(multiple(2, 3, 4, 5));
