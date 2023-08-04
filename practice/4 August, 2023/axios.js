const axios = require("axios");

const students = [
  { name: "Quincy", grade: 96 },
  { name: "Jason", grade: 84 },
  { name: "Alexis", grade: 100 },
  { name: "Sam", grade: 65 },
  { name: "Katie", grade: 90 },
];

const result = students.reduce((toppers, { name, grade }) => {
  return grade > 90 ? toppers.concat(name) : toppers;
}, []);

console.log(result);

// Cancellation

// const controller = new AbortController();

// axios
//   .get("https://jsonplaceholder.typicode.com/todos?_limit=1", {
//     signal: controller.signal,
//   })
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     if (axios.isCancel(error)) {
//       console.log(error.message);
//     } else {
//       console.log(error);
//     }
//   });

// controller.abort();

// Problem

// const axiosInstance = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   // params: {
//   //   _limit: 5,
//   // },
// });

// async function getData() {
//   const posts = axiosInstance.get("https://jsonplaceholder.typicode.com/posts");
//   const users = axiosInstance.get("https://jsonplaceholder.typicode.com/users");

//   const [{ data: postsData }, { data: usersData }] = await axios.all([
//     posts,
//     users,
//   ]);

//   const result = usersData.reduce((users, { id, name, email }) => {
//     usersPosts = postsData.filter(({ userId }) => userId == id);

//     users.push({ name: name, email: email, posts: usersPosts });

//     return users;
//   }, []);

//   for (let element of result) {
//     console.log(element);
//   }
// }

// getData();
