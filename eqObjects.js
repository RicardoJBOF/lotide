//IMPORT FILE
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// FUNCTION IMPLEMENTATION

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const key in object1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (typeof object1[key] === "object") {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (!object1[key] === object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
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

// console.log(eqObjects(cd, cd2));
// console.log(eqObjects(ab, ba));

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

//EXPORT FILE
module.exports = eqObjects;
