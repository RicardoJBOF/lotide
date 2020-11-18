//IMPORT FILE
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const flatten = (array) => {
  const answer = [];

  for (let i of array) {
    if (!Array.isArray(i)) {
      answer.push(i);
    } else {
      for (let j of i) {
        answer.push(j);
      }
    }
  }

  return answer;
};

//TEST CODE
//console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

//EXPORT FILE
module.exports = flatten;
