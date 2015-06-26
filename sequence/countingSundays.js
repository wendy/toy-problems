// You are given the following information, but you may prefer to do some research for yourself.
// 1 Jan 1900 was a Monday.
// Thirty days has September, 9, 4, 6, 11 
// April, June and November.
// All the rest have thirty-one,
// Saving February alone, 2
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var countingSundays = function() {
  var sundayIndex = 1;
  var sundayCounts = 0;

  for( var year = 1901; year <= 2000; year++ ){
    
    for( var month = 1; month <= 12; month++ ){

      // check every first of the month
      if( (sundayIndex + 1) % 7 === 0 ){
        sundayCounts++; 
      }
      
      //check for February and leap years
      if( month === 2 ){ year % 4 === 0 ? sundayIndex += 29 : sundayIndex += 28 }

      //check for April, June, September, and November
      else if( month === 4 || month === 6 || month === 9 || month === 11 ){ sundayIndex += 30 }

      //check for the rest of the months
      else { sundayIndex += 31}

    }
  }

  return sundayCounts;
};

console.log( countingSundays() );