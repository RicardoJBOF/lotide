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

//EXPORT FILE
module.exports = without;
