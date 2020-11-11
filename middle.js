//IMPORT FILE
const eqArrays = require("./eqArrays");
const assertArraysEqual = require('./assertArraysEqual');

// FUNCTION IMPLEMENTATION
const middle = middleArray => {
  let middleArrayAnswer = [];
  if (middleArray.length > 2) {
    if (middleArray.length % 2 === 0) {
      middleArrayAnswer = [middleArray[middleArray.length / 2 - 1], middleArray[middleArray.length / 2]];
    } else {
      middleArrayAnswer = middleArray[Math.floor(middleArray.length / 2)];
    }
  }
  return middleArrayAnswer;
};

//TEST CODE
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


//EXPORT FILE
module.exports = middle;

