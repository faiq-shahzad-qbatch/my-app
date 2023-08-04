console.log("start"); //1

const time1 = setTimeout(() => {
  console.log("time one"); //4
  const promise1 = new Promise(() => console.log("promise one")); //5
}, 0);

const promise2 = new Promise(() => {
  console.log("promise two"); //2
  const time2 = setTimeout(() => {
    console.log("time two"); //6
  }, 0);
});

console.log("end"); //3
