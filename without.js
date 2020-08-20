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



const without = function(source, itemsToRemove) {

  let withoutAnswer = source;

  for (let i = 0; i < source.length; i++){

    for (let j = 0; j < itemsToRemove.length; j++) {
      
      if(source[i] === itemsToRemove[j]) {

      withoutAnswer.splice(i,1);

      } 
    
    }

  }

  return withoutAnswer;

};




// TEST CODE


console.log(without(["1", "2", "3"], [1, 2, "3"])) //=> [2, 3]
console.log(without([1, 2, 3], [1])) // => [2, 3]

