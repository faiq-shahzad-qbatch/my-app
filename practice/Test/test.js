function func(data) {
  const moves = data.moves;

  return moves.reduce((result, { name, u15 }, index) => {
    !result[u15]
      ? (result[u15] = [{ name: name, index: index }])
      : result[u15].push({ name: name, index: index });
    return result;
  }, {});
}

function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  console.log(result);
}

main();
