// FUNCTION IMPLEMENTATION
const flatten = (array) => {
  const answer = [];

  for (let i of array) {
    if (!Array.isArray(i)) {
      answer.push(i);
    } else {
      for (let j of i) {
        answer.push(j);
      }
    }
  }
  return answer;
};

//EXPORT FILE
module.exports = flatten;
