// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; 
// for example, the 5-digit number, 15234, is 1 through 5 pandigital.
// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, 
// and product is 1 through 9 pandigital.
// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.
// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

var findPandigitalProducts = function() {
  var sum = 0;
  var products = {};

  for(var i = 2; i < 80; i++){
    var min;
    var high;

    if( i.toString().length === 1 ){
      high = Math.pow(10, 5)/i;
      min = 1000;
    } else { 
      high = Math.pow(10, 4)/i; 
      min = 100;
    }

    for(var j = min; j <= high; j++){
      var product = i * j;
      var string = makeSortedString(i, j, product);
      if( isPandigital(string) ){ 
        if( !products[product] ){
         sum += product;
         products[product] = true;
        }
      };
    }
  }
  return sum;
};

var makeSortedString = function(a, b, c) {
  return a.toString() + b.toString() + c.toString();
};

var isPandigital = function(string) {
  var pandigital = '123456789';

  return pandigital === string.split('').sort().join('') ? true : false;
};

console.log( findPandigitalProducts() );
