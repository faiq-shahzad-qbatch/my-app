const person = { name: "John", age: 30, gender: "male" };

for (const key in person) {
  console.log(key + ": " + person[key]);
}
