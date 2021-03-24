const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth;
  }
  calculateDepth(arr) {
    
    if (arr.some(i => Array.isArray(i))) {
      return 1 + this.calculateDepth(arr.reduce((acc, curr) => acc.concat(curr),[]))
                                    // arr.flat() replaces this longer method 
    } else {
    return 1
    }
  }
}