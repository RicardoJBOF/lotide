//IMPORT FILE
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    return `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`;
  }
};

//EXPORT FILE
module.exports = assertArraysEqual;
