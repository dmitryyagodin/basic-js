const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let initialActivity = Number(sampleActivity);

  if (isNaN(initialActivity)) {
    return false;
  }
  
  if (initialActivity >= 15 || initialActivity <= 0) {
    return false;
  }
    
  let age = Math.abs(Math.log(initialActivity / MODERN_ACTIVITY)) / (Math.log(2) / HALF_LIFE_PERIOD);
  
  return Math.ceil(age);
};

// console.log(dateSample('3.142'))
// console.log(dateSample('9.8888'))
