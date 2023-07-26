// // // function simulateAsyncTask() {
// // //   return new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve(10);
// // //     }, 1000);
// // //   });
// // // }

// // // const promise = simulateAsyncTask();

// // // const promise2 = new Promise((resolve) => {
// // //   setTimeout(() => {
// // //     resolve(20);
// // //   }, 1000);
// // // });

// // // console.log(promise);

// // // promise.then((result) => {
// // //   console.log(result);
// // // });

// // // promise.then((result) => {
// // //   console.log(result);
// // // });

// // // console.log(promise2);

// // // promise2.then((result) => {
// // //   console.log(result);
// // // });

// // // promise2.then((result) => {
// // //   console.log(result);
// // // });

// // // setTimeout(() => {
// // //   console.log(promise);
// // // }, 1000);

// // function test1(params) {
// //   const promise = new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve(10);
// //     }, 2000);
// //   });

// //   const data = promise.then((response) => {
// //     console.log(response);
// //     return Promise.resolve("Resolved promise.");
// //   });

// //   setTimeout(() => {
// //     console.log(data);
// //   }, 10000);

// //   // console.log(data);

// //   return data;
// // }

// // const returnedPromise = test1();
// // console.log(returnedPromise, "Outside Function");

// async function fetchData() {
//   const data = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

//   for (const item of data) {
//     const result = await item;

//     console.log(result);
//   }

//   // for await (const item of data) {
//   //   console.log(item);
//   // }
// }

// fetchData();
// // Output:
// // 1
// // 2
// // 3

async function fetchData() {
  const promises = [
    new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve) => setTimeout(() => resolve(2), 500)),
    new Promise((resolve) => setTimeout(() => resolve(3), 1500)),
  ];

  for await (const result of promises) {
    console.log(result);
  }
}

fetchData();
// Output (with delays):
// 1 (after 1000ms)
// 2 (after 500ms)
// 3 (after 1500ms)
