// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

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

// TEST CODE


assertEqual([1, 2, 3], [1, 2, 3]); // => should PASS
