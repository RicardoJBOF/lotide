// FUNCTION IMPLEMENTATION
const takeUntil = (array, callback) => {
  let answer = [];
  for (const element of array) {
    if (callback(element)) {
      return answer;
    } else {
      answer.push(element);
    }
  }
  return answer;
};

//EXPORT FILE
module.exports = takeUntil;
