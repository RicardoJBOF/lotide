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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let answer = '';

  if(Object.keys(object1).length !== Object.keys(object2).length) {

  answer = false;

  } else {



    for(let element of Object.keys(object1)) {

      if(object1[element] !== object2[element]){

        answer = false;

        if (Object.values(object1[element]).isArray && Object.values(object2[element]).isArray) {

          answer = eqArray(Object.values(object1[element]), Object.values(object2[element]))

        };

      } else {

        answer = true;

      }

    } 
  }

return answer;

};


// TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


console.log(eqObjects(ab, ba)); //false



