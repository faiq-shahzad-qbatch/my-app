async function func2() {
  console.log("HERE 3");
}

async function func1() {
  console.log("HERE 2");
  await func2();
  console.log("HERE 4");
}

async function main() {
  console.log("HERE 1");
  await func1();
  console.log("HERE 5");
}

main();
