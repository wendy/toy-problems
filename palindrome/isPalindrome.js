// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed 
// and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
// otherwise return the string false. For example: "racecar" is also "racecar" backwards. 
// Punctuation and numbers will not be part of the string. 

var isPalindrome = function(string) {
  if( typeof string !== 'string' ){ string = string.toString() }

  for( var i = 0, j = string.length - 1; i < string.length/2; i++, j-- ){
    if( string[i] !== string[j] ){
      return false;
    }
  }

  return true;
};
