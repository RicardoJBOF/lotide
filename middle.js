// FUNCTION IMPLEMENTATION
const eqArrays = function(actual, expected) {

  if (actual.toString() === expected.toString()) {

    return true;

  } else {

    return false;
  }

};


const assertArraysEqual = function(actual, expected) {

  if (eqArrays) {
    
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);

  }


};



const middle = function(middleArray) {

  let middleArrayAnswer = [];

  if (middleArray.length > 2) {

    if (middleArray.length % 2 === 0) {

      middleArrayAnswer = [middleArray[middleArray.length / 2 - 1],middleArray[middleArray.length / 2]];

    } else {

      middleArrayAnswer = middleArray[Math.floor(middleArray.length / 2)];

    }

  }

  return middleArrayAnswer;
};

//console.log(middle([1, 2, 3, 4])) // => [2, 3]

//console.log(middle([1, 2, 3, 4, 5])) // => [3]

//console.log(middle([1, 2])) // => []