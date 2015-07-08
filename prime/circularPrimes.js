// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

var findCircularPrimes = function(num) {
  var circularPrimes = 0;

  for(var i = 2; i < num; i++){
    if( isCircularPrimes(i) ){ circularPrimes++; }
  }

  return circularPrimes;
};

// Check to see if all rotation of a number is prime
var isCircularPrimes = function(num) {
  var numArray = num.toString().split('');

  for (var i = 0; i < numArray.length; i++) {
    var shifted = numArray.shift();
    numArray.push(shifted);

    var shiftedNum = Number(numArray.join(''));
    if ( !isPrime(shiftedNum) ) { return false; }
  }
  return true;
};

// Check to see if number is prime
var isPrime = function(num) {
  if (num === 2) { return true; }
  if (num % 2 === 0) { return false; }
  if (num <= 1) { return false; } 

  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if( num % i === 0 ){ return false; }
  }

  return true;
};

console.log( findCircularPrimes(1000000) );