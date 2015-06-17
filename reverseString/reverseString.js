// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

var reverse = function(string) {
  var result = '';

  for( var i = string.length - 1; i >= 0; i-- ){
    result += string[i];
  }

  return result;
};

reverse('test');
