const { toLower } = require("lodash");
const { compose, pipe } = require("lodash/fp");

const input = "  JavaScript  ";
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLower, wrap("div"));

console.log(transform(input));

// console.log(wrapInDiv(toLower(trim(input))));
