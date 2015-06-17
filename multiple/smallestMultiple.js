// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var smallestMultiple = function() {
  var start = 144470;

  while( !isDivisible(start) ){
    start = start + 5;
  }
  
  return start;
};

var isDivisible = function(num) {
  for( var i = 2; i <= 20; i++ ){
    if( num % i !== 0 ){
      return false;
    }
  }

  return true;
};