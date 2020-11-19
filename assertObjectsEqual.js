//IMPORT FILE
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`;
  }
};

//EXPORT FILE
module.exports = assertObjectsEqual;
