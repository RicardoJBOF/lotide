// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (eqArrays) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
    return false;
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

//console.log(results1);

const test1 = [1,2,3];

module.exports = map;

// console.log(assertArrayEqual(test1.map(x => x*10),[10,20,30]))

// console.log(assertArrayEqual(map(test1,x => x*10),[10,20,30]))



