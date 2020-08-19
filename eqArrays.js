// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    
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

// TEST CODE


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
