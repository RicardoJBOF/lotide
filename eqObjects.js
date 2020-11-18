//IMPORT FILE
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

//EXPORT FILE
module.exports = eqObjects;
