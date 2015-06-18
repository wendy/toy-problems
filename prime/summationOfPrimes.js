// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

var summationOfPrimes = function(num) {
  var sum = 0;

  for( var i = 2; i < num; i++ ){
    if( isPrime(i) ){ sum += i; }
  }

  return sum;
};

// Helper Function
// Check to see if number is prime
var isPrime = function(num) {
  if( num <= 1 ){ return false; }
  if( num === 2 ){ return true; }
  if( num % 2 === 0 ){ return false; }

  for( var i = 3; i <= Math.sqrt(num); i++ ){
    if( num % i === 0 ){ return false; }
  }

  return true;
};
