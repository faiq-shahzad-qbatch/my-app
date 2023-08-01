outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Break out of both loops when i is 1 and j is 1.
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
// Output:
// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0
