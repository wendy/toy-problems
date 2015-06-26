var fs = require('fs');


module.exports = function() {
  var array;
  var data = fs.readFileSync('maximumPathSum2.txt', 'utf8');

  array = data.split('\n');
  for( var i = 0; i < array.length; i++ ){
    array[i] = array[i].split(' ');

    for( var j = 0; j < array[i].length; j++ ){
      array[i][j] = Number( array[i][j] );
    }
  }

  return array;
};

