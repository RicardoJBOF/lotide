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

//EXPORT FILE
module.exports = letterPositions;
