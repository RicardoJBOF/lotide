//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const tail = (array) => array.slice(1);

// TEST CODE
// console.log(tail([1, 2, 3, 4, 5]));
// const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

//EXPORT FILE
module.exports = tail;
