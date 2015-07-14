// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, 
// there are exactly three solutions for p = 120.
// {20,48,52}, {24,45,51}, {30,40,50}
// For which value of p ≤ 1000, is the number of solutions maximised?
// P=a+b+sqrt(a^2+b^2)

var findMaxSolutions = function(num){
  var maxPerimeter;
  var maxSolutions = 0;

  for(var i = 1; i <= num; i++){
    var solutions = findSolutions(i);
    if(solutions > maxSolutions){
      maxSolutions = solutions;
      maxPerimeter = i;
    }
  }

  return maxPerimeter;
};

// Check for solutions per number
var findSolutions = function(num) {
  var p = num;
  var solutions = [];

  for(var a = 1; a <= num/4; a++){
    for(var b = p - a; b >= 1; b--){
      if( p === a + b + Math.sqrt( Math.pow(a, 2) + Math.pow(b,2))){
        solutions.push([a,b]);
      }
    }
  }

  return solutions.length;
};

console.log( findMaxSolutions(1000) );
