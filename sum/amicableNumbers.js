// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
// therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
// Evaluate the sum of all the amicable numbers under 10000.

var findSumAmicableNumbers = function(num) {
  var sum = 0;

  for( var i = 1; i < num; i++ ){
    if( isAmicable(i) ){ sum += i }
  }

  return sum;
};

var isAmicable = function(num) {
  var a = findSumFactors(num);
  var b = findSumFactors(a);
  return b === num && a !== b ? true: false;
};

var findSumFactors = function(num) {
  var sum = 1;

  for( var i = 2; i <= num/2; i++ ){
    if( num % i === 0 ){ sum += i }
  }

  return sum;
};

console.log( findSumAmicableNumbers(10000) );