var BigNumber = require('big-number').n;

// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!

var findFactorialDigitSum = function(num) {
  var result = BigNumber(1);
  var sum = 0;

  for( var i = 1; i <= num; i++ ){
    result.multiply(i); 
  }

  for( var i = 0; i < result.number.length; i++ ){
    sum += result.number[i];
  }


  return sum;
};

console.log(findFactorialDigitSum(100))