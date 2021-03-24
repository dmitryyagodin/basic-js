const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],

  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || this.result[position - 1] === undefined) {
      this.result = [];
      throw "Error";
    } else {
      this.result.splice(position - 1, 1);
    }
    return this
  },

  reverseChain() {
    this.result.reverse();
    return this
  },

  finishChain() {
    let result = this.result.join('~~');
    this.result = [];
    return result
  },
  getLength() {
    let length = this.result.length;

    return length;
  }
};



module.exports = chainMaker;
