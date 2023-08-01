function func(data) {
  requirements = data.requirements;

  return requirements.reduce((result, { req }) => {
    if (req < 32768) {
      !result[req] ? (result[req] = 1) : result[req]++;
    }
    return result;
  }, {});
}

function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  console.log(result);
}

main();
