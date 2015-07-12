// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove 
// digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. 
// Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

var findTruncatablePrimes = function() {
  var sum = 0;
  var truncatablePrimes = 0;
  var index = 11;

  while (truncatablePrimes < 11) {
    if( isPrime(index) && truncatableLeft(index) && truncatableRight(index) ){ 
      truncatablePrimes++;
      sum += index;
    }
    index += 2;
  }
  
  return sum;
};

// Check to see if number is prime
var isPrime = function(num) {
  if( num === 2 ){ return true; }
  if( num % 2 === 0 ){ return false; }

  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if( num % i === 0 ){ return false; }
  }

  return num > 1;
};

// Check to see if num is truncatable from left to right
var truncatableLeft = function(num) {
  var length = num.toString().length;
  var numArr = num.toString().split('');

  for (var i = 0; i < length - 1; i++) {
    numArr.shift();
    if( !isPrime(Number(numArr.join(''))) ){ return false; }
  }
  return true;
};

// Check to see if num is truncatable from right to left
var truncatableRight = function(num) {
  var length = num.toString().length;
  var numArr = num.toString().split('');

  for (var i = 0; i < length - 1; i++) {
    numArr.pop();
    if( !isPrime(Number(numArr.join(''))) ){ return false; }
  }
  return true;
};

console.log( findTruncatablePrimes() );