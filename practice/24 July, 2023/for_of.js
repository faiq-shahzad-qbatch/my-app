const arr = [1, 2, 3];

for (let element of arr) {
  console.log(element);
}

const obj = { a: 1, b: 2, c: 3 };

for (let key of Object.keys(obj)) {
  console.log(key + ": " + obj[key]);
}

for (let value of Object.values(obj)) {
  console.log(value);
}

for (let [key, value] of Object.entries(obj)) {
  console.log(key + ": " + value);
}
