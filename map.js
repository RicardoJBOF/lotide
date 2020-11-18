// FUNCTION IMPLEMENTATION
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

//EXPORT FILE
module.exports = map;
