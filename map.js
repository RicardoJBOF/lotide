//IMPORT FILE
const eqObjects = require("./eqObjects");
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

// TEST CODE

// const test1 = map(words, (word) => word[0]);
// console.log(test1);

// const test2 = [1, 2, 3];
// assertArraysEqual(
//   test2.map((x) => x * 10),
//   [10, 20, 30]
// );
// assertArraysEqual(
//   map(test2, (x) => x * 10),
//   [10, 20, 30]
// );

//EXPORT FILE
module.exports = map;
