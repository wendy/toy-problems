// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, 
// begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, 
// multiply this value by its alphabetical position in the list to obtain a name score.
// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, 
// is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
// What is the total of all the name scores in the file?

var fs = require('fs');

var data = fs.readFileSync('namesScores.txt', 'utf8');
var sortedDataArray = data.replace(/"/g, '').split(',').sort();

var findNamesScores = function(array){
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    sum += findNameScore( array[i] ) * (i + 1);
  }

  return sum;
};

var findNameScore = function(name) {
  var sum = 0;

  for (var i = 0; i < name.length; i++) {
    sum += alphabet[name[i]];
  }

  return sum;
};

var alphabet = function(){
  var obj = {};
  var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i < 26; i++) {
    obj[letters[i]] = i + 1;
  }

  return obj;
}();


console.log( findNamesScores(sortedDataArray) );

