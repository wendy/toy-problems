// If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters 
// and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

var findAllLetterCounts = function(num) {
  var result = 0;

  for( var i = 1; i <= num; i++ ){
    result += findLetterCounts(i);
  }

  return result;
};

var findLetterCounts = function(num) {
  var numStr = num.toString();

  if( num >= 100 ){
    if( Number( numStr.slice(1) ) === 0 ){
      return letterCounts[ numStr[0] ] + 7;
    } else {
      return letterCounts[ numStr[0] ] + 10 + findLetterCounts( Number( numStr.slice(1) ) );
    }
  } else if( num > 20 ){
    if( Number( numStr.slice(1) ) === 0 ){
      return letterCounts[ numStr ];
    } else {
      return letterCounts[numStr[0] + '0'] + findLetterCounts( Number( numStr.slice(1) ) );
    }
  } else {
    return letterCounts[ numStr ];
  }
};


var letterCounts = {
  '1': 3,
  '2': 3,
  '3': 5,
  '4': 4,
  '5': 4,
  '6': 3,
  '7': 5,
  '8': 5,
  '9': 4,
  '10': 3,
  '11': 6,
  '12': 6,
  '13': 8,
  '14': 8,
  '15': 7,
  '16': 7,
  '17': 9,
  '18': 8,
  '19': 8,
  '20': 6,
  '30': 6,
  '40': 5,
  '50': 5,
  '60': 5,
  '70': 7,
  '80': 6,
  '90': 6
}

findAllLetterCounts(999) + 11;
