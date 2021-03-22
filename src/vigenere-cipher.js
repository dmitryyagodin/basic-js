const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg = true) {
    arg ? this.direct = true : this.reverse = true;
    this.encrypt = this.encrypt;
    this.decrypt = this.decrypt;
  }


  encrypt(message, key) {
    message = message.toLowerCase();
    key = key.toLowerCase();
    if (arguments.length < 2 ) Throw("error");
    let encoded = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';

    function encode(x, y) {
      let a = letters.indexOf(x);
      let b = letters.indexOf(y);
      return a + b > 25 ? letters[(a + b - 26)] : letters[a + b];
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if (letters.includes(message[i])) {
       encoded += encode(message[i], key[k]);
       k === key.length - 1 ? k = 0 : k++;
      } else {
        encoded += message[i]
      }
    }
    return this.reverse === true ? encoded.split("").reverse().join("").toUpperCase() : encoded.toUpperCase();
  }

  decrypt(encryptedMessage, key) {
    
    let message = encryptedMessage.toLowerCase();
    key = key.toLowerCase();
    if (arguments.length < 2 ) Throw("error");
    let decoded = '';
    let letters = 'abcdefghijklmnopqrstuvwxyz';

    function decode(x, y) {
      let a = letters.indexOf(x);
      let b = letters.indexOf(y);
      return a - b < 0 ? letters[a - b + 26] : letters[a-b];
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if (letters.includes(message[i])) {
       decoded += decode(message[i], key[k]);
       k === key.length - 1 ? k = 0 : k++;
      } else {
        decoded += message[i]
      }
    }
    return this.reverse === true ? decoded.split("").reverse().join("").toUpperCase() : decoded.toUpperCase();   
  }
}

module.exports = VigenereCipheringMachine;