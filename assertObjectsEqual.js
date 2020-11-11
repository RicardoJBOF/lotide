//IMPORT FILE
const eqObjects = require("./eqObjects");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  eqObjects
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);
};

// TEST CODE
const ab = {
  a: "1",
  b: "2",
};
const ba = {
  b: "2",
  a: "1",
};
const abc = {
  a: "1",
  b: "2",
  c: "3",
};
const cd = {
  c: "1",
  d: ["2", 3],
};
const dc = {
  d: ["2", 3],
  c: "1",
};
const cd2 = {
  c: "1",
  d: ["2", 3, 4],
};

// assertObjectsEqual(cd, cd2);

//EXPORT FILE
module.exports = assertObjectsEqual;
