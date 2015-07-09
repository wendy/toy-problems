// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

var findDigitFifthPowers = function() {
  var sum = 0;

  for (var i = 2; i < 1000000; i++) {
    if (isFifthPowers(i)) { sum += i; }
  }

  return sum;
};

// Check to see if a number is equal to its fifth powers
var isFifthPowers = function(num) {
  var numArray = num.toString().split('');
  var sum = 0;

  for (var i = 0; i < numArray.length; i++) {
    sum += Math.pow( Number(numArray[i]), 5);
  }

  return sum === num;
};

console.log(findDigitFifthPowers());