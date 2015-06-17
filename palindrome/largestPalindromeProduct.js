// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindromeProduct = function(num) {
  var firstNumber = Number( '9'.repeat(num) );
  var secondNumber = firstNumber;
  var largestProduct = [0];
  var product;

  for( var first = firstNumber; first > 0; first-- ){
    for( var second = secondNumber; second > 0; second-- ){
      product = first * second;
      if( isPalindrome(product) && product > largestProduct[0] ){
        largestProduct = [product, first, second];
      }
    }
    secondNumber = firstNumber;
  }
  return largestProduct;
};

// Helper Function
// Check to see if string is a palindrome
var isPalindrome = function(string) {
  if( typeof string !== 'string' ){ string = string.toString() }

  for( var i = 0, j = string.length - 1; i < string.length/2; i++, j-- ){
    if( string[i] !== string[j] ){
      return false;
    }
  }

  return true;
};
