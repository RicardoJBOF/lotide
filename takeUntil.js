const takeUntil = function(array, callback) {
  let answer = [];
  for(const element of array) {
    if(callback(element)) {
    return answer;
    } else {
      answer.push(element)
    }
  }
  return answer;
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0); 
// console.log(results1); //[ 1, 2, 5, 7, 2 ]

/*
const takeUntil = function(array, callback) {
  let answer = [];
  for(let element of array) {
    if(!callback(element)) {
      answer.push(element)
    } else if (callback(element)) {
      break;
    }
  }
  return answer;
}

*/