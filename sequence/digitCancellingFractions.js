// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may 
// incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing 
// two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

var findDCF = function() {
  var nonTrivial = [];

  for( var i = 11; i <= 99; i++ ){
    for( var j = i + 1; j <= 99; j++ ){
      if( i % 10 !== 0 ){
        var isSimplified = simplify(i, j);
        if( isSimplified[0] ){
          var old = i/j;
          var simplified = isSimplified[1]/isSimplified[2];
          if( old === simplified){ nonTrivial.push([[i,j], isSimplified[1], isSimplified[2]])}
        }
      }
    }
  }

  return nonTrivial;
};

var simplify = function(a,b) {
  var a = a.toString().split('');
  var b = b.toString().split('');

  for(var bi = 0; bi < b.length; bi++){
    var ai = a.indexOf(b[bi]);
    if( ai !== -1 ){
      return [true, Number(a[opposite(ai)]), Number(b[opposite(bi)]) ]
    }
  }
  return [false];
};

var opposite = function(num){
  return !num ? 1 : 0;
};