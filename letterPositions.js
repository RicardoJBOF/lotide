//IMPORT FILE
const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const letterPositions = function (sentence) {
  const result = {};
  for (const position in sentence) {
    const letter = sentence[position];
    result[letter]
      ? result[letter].push(position)
      : (result[letter] = [position]);
  }
  return result;
};

// TEST CODE
// console.log(letterPositions("lighthouse in the house"));
//answer:
/*{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */

//EXPORT FILE
module.exports = letterPositions;
