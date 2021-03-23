const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (!Array.isArray(arr)) {throw 'Error'};
 
  const strings = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let newArr = [];

  for (let i = 0; i < arr.length; i ++) {
    !strings.includes(arr[i]) && newArr.push(arr[i]);

    if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next' || 
    arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {
     continue
    }

    arr[i] === '--discard-next' && i++;
    arr[i] === '--discard-prev' && newArr[newArr.length - 1] !== undefined && newArr.pop();
    arr[i] === '--double-next' && arr[i + 1] !== undefined && newArr.push(arr[i + 1]);
    arr[i] === '--double-prev' && newArr[newArr.length - 1] !== undefined && newArr.push(newArr[newArr.length - 1]);
  }

  return newArr
  
};

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))