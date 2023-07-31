function func(data) {
  reaction_list = data.reaction_list;
  pushbacks = data.pushbacks;

  return reaction_list.map(({ pushback_indexes }) => {
    const newReaction = {};
    newReaction.pushback_indexes = pushback_indexes;
    newReaction.pushbacks = [];

    pushback_indexes.map((pushback_index) => {
      newReaction.pushbacks.push(pushbacks[pushback_index]);
    });

    return newReaction;
  });
}

function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  // console.log(result);

  for (let element of result) {
    console.log(element);
  }
}

main();
