// // [{ name: "x" }].filter((x) => {
// //   return { y: x["name"] };
// // });

// console.log(
//   ["ali", 5, "5", null, 1, 0].filter((x) => {
//     return { x };
//   }),
// );

// console.log(Array.from(Array(10).map((value, index) => index)));

// get name of students with grade greater than 90 using:
// map, filter, reduce

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

// console.log(students.filter((value) => value.grade > 90).map((x) => x.name));

console.log(
  students.reduce(
    (arr, row) => (row.grade > 90 ? [...arr, row.name] : arr),
    [],
  ),
);

console.log(
  students.reduce(
    (arr, { grade, name }) => (grade > 90 ? [...arr, name] : arr),
    [],
  ),
);

// console.log(
//   students.map((value) => {
//     if (value.grade > 90) {
//       return value.name;
//     }
//   }),
// );
