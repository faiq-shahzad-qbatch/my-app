const numbers = [1, 2, 3, 4, 5];

// const [num1, ...num2, num3] = numbers;

// console.log(num2);

console.log(num1, num2, num3);

const user1 = {
  name: "Faiq",
  age: 23,
  address: {
    line1: "P-37 Fareed Town",
    line2: "Dhudhiwala, Jaranwala Road",
    city: "Faisalabad",
  },
};

// const {
//   name: firstName,
//   age,
//   school: firstSchool = "DMC",
//   address: { line1: myAddress },
// } = user1;

function foo({
  name,
  age,
  school: firstSchool = "DMC",
  address: { line1: myAddress },
}) {
  console.log(name, age, firstSchool, myAddress);
}

foo(user1);
