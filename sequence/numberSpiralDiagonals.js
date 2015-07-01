// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

var findSpiralDiagonals = function(num) {
  var limit = Math.pow(num, 2);
  var index = 1;
  var square = 1;
  var sum = 1;

  while(square < limit){
    index += 2;
    square = Math.pow(index, 2);
    sum += (square * 4) - ((index - 1) * 6);
  }

  return sum;
};

console.log( findSpiralDiagonals(1001) );