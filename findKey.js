// FUNCTION IMPLEMENTATION
const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//EXPORT FILE
module.exports = findKey;
