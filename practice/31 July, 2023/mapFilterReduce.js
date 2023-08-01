// High Priced Product Categories

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

const result = products
  .reduce((finalResult, { price: currentPrice, category: currentCategory }) => {
    const findResult = finalResult.find(
      (product) => product.category === currentCategory
    );

    if (findResult) {
      findResult.total += currentPrice;
      findResult.items++;
      findResult.average = findResult.total / findResult.items;
    } else {
      const obj = {};

      finalResult.push({
        category: currentCategory,
        total: currentPrice,
        items: 1,
        average: currentPrice,
      });
    }

    return finalResult;
  }, [])
  .map(({ category, average }) => {
    return { category, average };
  });

console.log(result);

// // HR VS IT Department

// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];

// const result = employees.reduce(
//   (
//     departments,
//     { department: currenEmployeeDepartment, salary: currentEmployeeSalary }
//   ) => {

//     department

//     departments.map((currentDepartment) => {
//       if (currentDepartment.department != currenEmployeeDepartment) {
//         currentDepartment.department = currenEmployeeDepartment;
//         currentDepartment.employees = 1;
//         currentDepartment.total = currentEmployeeSalary;
//         currentDepartment.average = currentEmployeeSalary;
//       } else {
//         currentDepartment.total += currentEmployeeSalary;
//         currentDepartment.employees++;
//         currentDepartment.average =
//           currentDepartment.total / currentDepartment.employees;
//       }
//     });

//     return departments;
//   },
//   [{ department: employees[0].department, average: employees[0].salary }]
// );

// console.log(result);

// // Age difference from the youngest and oldest

// const input = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// const result = input.reduce(
//   ([min, max, difference], { age }) => {
//     if (age > max) {
//       max = age;
//     }
//     if (age < min) {
//       min = age;
//     }

//     return [min, max, max - min];
//   },
//   [9999, -9999, 0]
// );

// console.log(result);

// // n! with Map and Reduce

// const input = 6;

// const result = Array.from(Array(input), (_, index) => index + 1).reduce(
//   (factorial, element) => factorial * element,
//   1
// );

// console.log(result);

// // Count elements in array of arrays

// const input = [
//   ["a", "b", "c"],
//   ["c", "d", "f"],
//   ["d", "f", "g"],
// ];

// const result = input.flat().reduce((elementCounts, element) => {
//   if (!elementCounts[element]) {
//     elementCounts[element] = 1;
//   } else {
//     elementCounts[element]++;
//   }

//   return elementCounts;
// }, {});

// console.log(result);

// // Sum of every positive element
// const input = [1, -4, 12, 0, -3, 29, -150];

// const result = input
//   .filter((x) => x > 0)
//   .reduce((sum, value) => (sum += value));

// console.log(result);

// // High performing students
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "David", scores: [100, 100, 100] },
// ];

// const result = students.reduce((highAchievers, { name, scores }) => {
//   average = scores.reduce((sum, value) => sum + value) / scores.length;

//   if (average > 90) {
//     highAchievers = [...highAchievers, { name: name, average: average }];
//   }

//   return highAchievers;
// }, []);

// console.log(result);
