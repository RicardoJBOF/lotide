// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  
  } else {

    console.log(`🔴🔴🔴 Assertion Failed ${actual} !== ${expected}`);

  }


};

const countLetters = function(arrayTest) {

  const result = {};

  for (let letters of arrayTest){

      if (result[letters]){

        result[letters]++
        
      } else {

        result[letters] = 1;

      }
      

  }

  return result;

};

module.exports = countLetters;

//console.log(countLetters("hello"));

// TEST CODE
