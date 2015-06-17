// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

var findNthPrime = function(num) {
  var primesFound = 0;
  var index = 1;

  while( primesFound !== num ){
    index++;
    if( isPrime(index) ){
      primesFound++;
    }
  }

  return index;
};

// Helper Functions
// Check to see if number is prime
var isPrime = function(num) {
  if( num <= 1 ){ return false; }
  if( num === 2 ){ return true; }
  if( num % 2 === 0 ){ return false; }

  for( var i = 3; i <= Math.sqrt(num); i = i + 2 ){
    if( num % i === 0 ){
      return false;
    }
  }

  return true;
};

findNthPrime(10001);
