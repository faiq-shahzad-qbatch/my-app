const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

const person2 = {
  name: "Bob",
};

// Borrowing the `greet` function from person1 and using it on person2
person2.greet = person1.greet;

person1.greet(); // Output: "Hello, my name is Alice."
person2.greet(); // Output: "Hello, my name is Bob."
