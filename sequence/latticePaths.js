// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

var latticePath = function(grid) {
  var solutions = 0;
  var first = true;

  var findPaths = function(x, y){

    if( x === grid && y === grid ){ solutions++; return;}

    if( x < grid && !first ){
      findPaths( x + 1, y );
    }
    if ( y < grid ){
      first = false; 
      findPaths( x, y + 1 );
    }
  };

  findPaths(0,0)
  return solutions;
};

console.log( latticePath(20) * 2 );
