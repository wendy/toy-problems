// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

var latticePath = function(grid) {
  var solutions = 0;

  var findPaths = function(index){
    var x = index[0];
    var y = index[1];
    console.log("beginning", x, y);

    if( x === grid && y === grid ){ solutions++; return; }

    if( x < grid ){
      findPaths([ x + 1, y ])
    }
    if ( y < grid ){ 
      findPaths( [x, y + 1] )
    }
  };

  findPaths([0,0])
  return solutions;
};

console.log( latticePath(20) );
