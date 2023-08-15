// const array = [1, 2, 3, 4, 5, [1, 2]];

const obj = { a: 1, b: { c: 2 } };

const obj2 = { ...obj };

obj2.b.c = 99;

console.log(obj);

// const array2 = [...array];

// array2[5][0] = 99;

// console.log(array);
// console.log(array2);

// function removeFalsyValues(arr) {
//   return arr.filter((element) => element);
// }

// const values = [0, 1, "", "hello", false, NaN, undefined, null];
// console.log(removeFalsyValues(values));

// function findCommonElements(array1, array2) {
//   return array1.filter((element) => array2.includes(element));
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findCommonElements(array1, array2));

// console.log(Array.from(Array(10), (_, index) => index + 1));
// console.log(
//   Array(10)
//     .fill(0)
//     .map((_, index) => index + 1),
// );

// function firstNonRepeatingChar(string) {
//   const charMap = new Map();

//   for (let char of string) {
//     charMap.set(char, (charMap.get(char) ?? 0) + 1);
//   }

//   for (let char of string) {
//     if (charMap.get(char) === 1) {
//       return char;
//     }
//   }

//   return null;
// }

// console.log(firstNonRepeatingChar("ssttreess"));
