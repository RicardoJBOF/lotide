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

//EXPORT FILE
module.exports = eqArrays;
