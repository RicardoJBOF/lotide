const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION

const head = arrayTest => {
  let answer = arrayTest.shift()
  return answer;
};

module.exports = head;

