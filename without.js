//IMPORT FILE
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const without = (source, itemsToRemove) => {
  let answer = source;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        answer.splice(i, 1);
      }
    }
  }
  return answer;
};

//TEST CODE
// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])

//EXPORT FILE
module.exports = without;
