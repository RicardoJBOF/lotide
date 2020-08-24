const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION

const tail = arrayTest => {
  arrayTest.shift();
  return arrayTest;
};


module.exports = tail;