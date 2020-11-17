//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const eqArrays = (actual, expected) => {
  let answer = true;
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      answer = answer && eqArrays(actual[i], expected[i]);
    } else if (actual[i] !== expected[i]) {
      answer = false;
    }
  }
  return answer;
};

//TEST CODE
// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
// console.log(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  )
); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

//EXPORT FILE
module.exports = eqArrays;
