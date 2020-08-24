const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION

const tail = arrayTest => {
  arrayTest.shift();
  return arrayTest.test;
};


module.exports = tail;