//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const countLetters = function (array) {
  const result = {};
  for (const letter of array) {
    result[letter] ? result[letter]++ : (result[letter] = 1);
  }
  return result;
};

// TEST CODE
//console.log(countLetters("hello"));

//EXPORT FILE
module.exports = countLetters;
