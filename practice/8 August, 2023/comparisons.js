console.log([] == ""); // true
console.log([] == 0); // true
console.log([] == false); // true
console.log([] == true); // false
console.log([] == 1); // false
console.log([] == undefined); // false
console.log([] == null); // false

console.log({} == ""); // false
console.log({} == 0); // false
console.log({} == 1); // false
console.log({} == false); // false
console.log({} == true); // false
console.log({} == undefined); // false
console.log({} == null); // false

console.log({} == {}); // false
console.log({} === {}); // false

console.log([] == []); // false
console.log([] === []); // false

console.log({} == []); // false
console.log({} === []); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(true == 1); // true
console.log(true === 1); // false

console.log(false == 0); // true
console.log(false === 0); // false

console.log("" == 0); // true
console.log("" === 0); // false

console.log("" == false); // true
console.log("" === false); // false

console.log("5" == 5); // true
console.log("5" === 5); // false

console.log("5" == [5]); // true
console.log("5" === [5]); // false

console.log(0 == "0"); // true
console.log(0 === "0"); // false

console.log(null == 0); // false
console.log(null === 0); // false

console.log(undefined == 0); // false
console.log(undefined === 0); // false

console.log(undefined == null); // true
console.log(undefined === null); // true

console.log(5 == 5); // true
console.log(5 === 5); // true

console.log("5" == 5); // true
console.log("5" === 5); // false

console.log("5" == "5"); // true
console.log("5" === "5"); // true

console.log(true == 1); // true
console.log(true === 1); // false

console.log(false == 0); // true
console.log(false === 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log([] == false); // true
console.log([] === false); // false

console.log({} == false); // false
console.log({} === false); // false

console.log(undefined == false); // false
console.log(undefined === false); // false

console.log(null == null); // true
console.log(null === null); // true

console.log(null == false); // false
console.log(null === false); // false

console.log("" == null); // false
console.log("" === null); // false

console.log(0 == []); // true
console.log(0 === []); // false

console.log("0" == []); // false
console.log("0" === []); // false

console.log("0" == false); // true
console.log("0" === false); // false

console.log("0" == true); // false
console.log("0" === true); // false

console.log("1" == true); // true
console.log("1" === true); // false

console.log(null == ""); // false
console.log(null === ""); // false

console.log(undefined == ""); // false
console.log(undefined === ""); // false

console.log({} == 0); // false
console.log({} === 0); // false

console.log({} == "0"); // false
console.log({} === "0"); // false

console.log({} == false); // false
console.log({} === false); // false

console.log([1] == true); // true
console.log([1] === true); // true

console.log([0] == true); // false
console.log([0] === true); // false

console.log([] == true); // false
console.log([] === true); // false

console.log([] == null); // false
console.log([] === null); // false

console.log([] == undefined); // false
console.log([] === undefined); // false

console.log("" == {}); // false
console.log("" === {}); // false

console.log("" == []); // true
console.log("" === []); // false

console.log("" == null); // false
console.log("" === null); // false

console.log("" == undefined); // false
console.log("" === undefined); // false

console.log(5 == NaN); // false
console.log(5 === NaN); // false

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

console.log(NaN == null); // false
console.log(NaN === null); // false

console.log(NaN == undefined); // false
console.log(NaN === undefined); // false
