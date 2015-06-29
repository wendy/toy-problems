// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 
// 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
// The lexicographic permutations of 0, 1 and 2 are:
// 012   021   102   120   201   210
// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

var findLexPerm = function(string, num) {
  var permRange = [num, 1];
  var stringArray = string.split('');
  var first = true;
  var leftover;

  while( permRange[0] > 0 ){
    var result = findRange(permRange[0]);
    if( first ){
      leftover = stringArray.splice( - result[2]);
      first = false;
    }
    stringArray.push( leftover.splice( result[1], 1)[0]);
    permRange = result;
  }

  stringArray.push(leftover);

  return stringArray.join('');
};


// result = [permRangeLeft, num of perms in the rotations, nums it needs]
var findRange = function(num){
  if( num < 3 ){ return [0, num - 1, 1]}
  for( var i = 1, p = 1; i <= num; i++, p *= i){
    if( num < p ){
      p /= i;
      if( num % p === 0 ){ return [p, Math.floor(num/p) - 1, i]}
      return [num % p, Math.floor(num/p), i];
    }
  }
};


console.log( findLexPerm('0123456789', 1000000) );
