//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// TEST CODE
// console.log(
//   findKey(
//     {
//       "Blue Hill": { stars: 1 },
//       Akaleri: { stars: 3 },
//       noma: { stars: 2 },
//       elBulli: { stars: 3 },
//       Ora: { stars: 2 },
//       Akelarre: { stars: 3 },
//     },
//     (x) => x.stars === 2
//   )
// ); // => "noma"

//EXPORT FILE
module.exports = findKey;
