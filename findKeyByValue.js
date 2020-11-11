//IMPORT FILE
const assertEqual = require("./assertEqual");

// FUNCTION IMPLEMENTATION
const findKeyByValue = function (objectMovies, title) {
  for (const genre of Object.keys(objectMovies)) {
    if (objectMovies[genre] === title) {
      return genre;
    }
  }
};

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//EXPORT FILE
module.exports = findKeyByValue;
