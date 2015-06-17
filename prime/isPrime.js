// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed 
// and return the string true if the parameter is a prime number, otherwise return the string false. 
// The range will be between 1 and 2^16. 

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