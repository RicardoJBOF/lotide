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

// TEST CODE
const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data, (x) => x < 0));

//EXPORT FILE
module.exports = takeUntil;
