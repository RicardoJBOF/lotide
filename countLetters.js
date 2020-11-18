// FUNCTION IMPLEMENTATION
const countLetters = function (array) {
  const result = {};
  for (const letter of array) {
    result[letter] ? result[letter]++ : (result[letter] = 1);
  }
  return result;
};

//EXPORT FILE
module.exports = countLetters;
