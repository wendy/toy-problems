// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

var largestPrimeFactor = function(num) {
  var numSqrt = closestOdd( Math.floor( Math.sqrt(num) ) );

  for( var i = numSqrt; i > 1; i = i - 2 ){
    if( isFactor(num, i) && isPrime(i) ){
      return i;
    }
  }

  return null;
};

// Helper Functions:
// Check if number is even, if so, change number to the closest odd
var closestOdd = function(num) {
  if( num % 2 === 0 ){
    return num - 1;
  }
  return num;
};

// Check to see if number is prime
var isPrime = function(num) {
  if( num <= 1 ){ return false; }
  if( num === 2 ){ return true; }
  if( num % 2 === 0 ){ return false; }

  for( var i = 3; i < Math.sqrt(num); i = i + 2 ){
    if( num % i === 0 ){
      return false;
    }
  }

  return true;
};

// Check to see if number is a factor
var isFactor = function(num, factor) {
  return num % factor === 0 ? true : false;
};