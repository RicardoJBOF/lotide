// FUNCTION IMPLEMENTATION
const findKeyByValue = function (objectMovies, title) {
  for (const genre of Object.keys(objectMovies)) {
    if (objectMovies[genre] === title) {
      return genre;
    }
  }
};

//EXPORT FILE
module.exports = findKeyByValue;
