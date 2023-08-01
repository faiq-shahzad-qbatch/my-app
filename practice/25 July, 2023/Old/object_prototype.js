const personPrototype = {
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

const person1 = Object.create(personPrototype);
person1.name = "John";
person1.greet(); // Output: "Hello, my name is John."
