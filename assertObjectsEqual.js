//IMPORT FILE
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  eqObjects
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);
};

//EXPORT FILE
module.exports = assertObjectsEqual;
