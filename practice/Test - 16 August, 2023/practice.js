const obj = { name: "Ali", data: [{ degree: "BS" }, { degree: "CS" }] };

const {
  name,
  data: [{ degree }],
} = obj;

console.log(name, degree);
