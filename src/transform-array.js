const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)) {throw 'Error'};
 
  const strings = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];

  for (let i = 0; i < arr.length; i ++) {
    !strings.includes(arr[i]) && newArr.push(arr[i]);  
    arr[i] === '--discard-next' && i++;
    arr[i] === '--discard-prev' && newArr[newArr.length - 1] && newArr.pop();
    arr[i] === '--double-next' && arr[i + 1] && newArr.push(arr[i + 1]);
    arr[i] === '--double-prev' && newArr[newArr.length - 1] && newArr.push(newArr[newArr.length - 1]);
  }

  return newArr
  
};

// console.log(transform([1, 2, 3, '--double-next', 4, 5]))