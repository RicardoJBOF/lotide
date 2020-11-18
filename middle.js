// FUNCTION IMPLEMENTATION
const middle = middleArray => {
  let middleArrayAnswer = [];
  if (middleArray.length > 2) {
    if (middleArray.length % 2 === 0) {
      middleArrayAnswer = [middleArray[middleArray.length / 2 - 1], middleArray[middleArray.length / 2]];
    } else {
      middleArrayAnswer = middleArray[Math.floor(middleArray.length / 2)];
    }
  }
  return middleArrayAnswer;
};

//EXPORT FILE
module.exports = middle;

