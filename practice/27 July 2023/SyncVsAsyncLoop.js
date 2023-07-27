function foo(element) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1 + element);
    }, 500);
  });
}

const arr = [1, 2, 3, 4];

const newArr = [];

async function bar() {
  for (const element of arr) {
    const newElement = await foo(element);
    newArr.push(newElement);
  }

  console.log(newArr);
}

bar();
