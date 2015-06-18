// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var findSpecialPythagoreanTriplet = function(num) {
  var found = false;
  var a = 1;
  var b = 2;
  var c = num - a - b;

  while( a < num/3 ){
    if( isPythagorean(a, b, c) ){
      return [a,b,c];
    }
    if( b >= c ){
      a++;
      b = a + 1;
      c = num - a - b;
    } else {
      b++;
      c--;
    }
  }

  return null;
};

// Helper Function
// Check to see if the three numbers are pythagorean
var isPythagorean = function(a, b, c) {
  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ? true : false;
};