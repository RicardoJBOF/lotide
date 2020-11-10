//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const head = (array) => array.shift();

// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//EXPORT FILE
module.exports = head;
