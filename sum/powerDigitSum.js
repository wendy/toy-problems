var BigNumber = require('big-number').n

// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 2^1000?

var findPowerDigitSum = function(num) {
  var result = BigNumber(2).pow(num).number;
  var sum = 0;

  for( var i = 0; i < result.length; i++ ){
    sum += result[i];
  }

  return sum;
};

console.log( findPowerDigitSum(1000) );