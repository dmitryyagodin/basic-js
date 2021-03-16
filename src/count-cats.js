const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array = []) {
  count = 0;
  for (let i of array) {
    count += i.filter(element => element === '^^').length;
  }
  return count
};

// console.log(countCats([
//   [0, 1, '^^'],
//   [0, '^^', 2],
//   ['^^', 1, 2]
// ]))