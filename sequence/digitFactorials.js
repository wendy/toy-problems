// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var findDigitFactorials = function() {
  var results = [];
  findCuriousNums(3, 362880, results);
  return results;
};


// Find curious numbers from a starting to finish point & add to results if found
var findCuriousNums = function(start, finish, results){
  for(var i = start; i <= finish; i++){
    var arrayi = i.toString().split('');
    var arraysum = 0;
    arrayi.forEach(function(item){
      arraysum += factorial( Number(item) );
    });

    if( arraysum === i){ results.push(i) }
  }
};

// Find factorial of any number
var factorial = function(num) {
  var result = 1;

  for(var i = 2; i <= num; i++){
    result *= i;
  }

  return result;
};

console.log( findDigitFactorials() );