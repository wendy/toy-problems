// An irrational decimal fraction is created by concatenating the positive integers:
// 0.123456789101112131415161718192021...
// It can be seen that the 12th digit of the fractional part is 1.
// If dn represents the nth digit of the fractional part, find the value of the following expression.
// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

var findChampernownesConstant = function(){
  var nthDigit = 1;
  var index = 1;
  var product = 1;

  while (nthDigit <= 1000000 ) {

    // make number into an Array;
    var indexArr = index.toString().split('');

    // for each digit in number check to see if it's the nth number wanted
    for(var i = 0; i < indexArr.length; i++){
      if( nthDigit === 1 || nthDigit === 10 || nthDigit === 100 || nthDigit === 1000 || nthDigit === 10000 || nthDigit === 100000 || nthDigit === 1000000 ){
        product *= Number( indexArr[i] );
      }
      nthDigit++;
    }
    index++;
  }

  return product;
};

console.log( findChampernownesConstant() );
