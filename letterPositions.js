// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {

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


const letterPositions = function(sentence) {

  const results = {};
  
  for (let position in sentence) { 

    const letter = sentence[position];

    if(results[letter]){
      
      results[letter].push(position);

    } else {
      
      if(letter !== ' ') {

        results[letter] = [position];

      }

    }
  }

  return results;
};

module.exports = letterPositions;

//console.log(letterPositions("lighthouse in the house"));

/*{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */

//assertArraysEqual(letterPositions("hello").e, [1]);