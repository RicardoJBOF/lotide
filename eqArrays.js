// FUNCTION IMPLEMENTATION

const eqArrays = (actual, expected) => {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;



