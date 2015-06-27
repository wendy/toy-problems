// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

// SOLUTION 1
var latticePath = function(grid) {
  var solutions = 0;

  var findPaths = function(x, y){

    if( x === grid && y === grid ){ solutions++; return;}

    if( x < grid ){
      findPaths( x + 1, y );
    }
    if ( y < grid ){
      findPaths( x, y + 1 );
    }
  };

  findPaths(0,1);
  return solutions * 2;
};

// SOLUTION 2

var efficientLatticePath = function(grid) {
  var nodes = findNodes(grid);
  var results = 0;

  for( var i = 0, y = grid; i < nodes.length; i++, y-- ){
    results += nodes[i] * findPaths(i,y, grid)
  }

  return results;
};

var findNodes = function(grid) {
  var nodes = [];
  var halfNodes = [];

  for(var i = 0; i <= grid; i++ ){
    nodes.push([]);
    for( j = 0; j <= grid - i; j++){
      if( i === 0 || j === 0){
        nodes[i].push(1);
      } else {
        nodes[i][j] = nodes[i][j-1] + nodes[i-1][j];
      }

      if( j === grid - i ){ halfNodes.push( nodes[i][j])}
    }
  }

  return halfNodes;
};

var findPaths = function(x,y, grid) {
  var solutions = 0;

  var findInnerPaths = function(x, y){

    if( x === grid && y === grid ){ solutions++; return;}

    if( x < grid ){
      findInnerPaths( x + 1, y, grid );
    }
    if ( y < grid ){
      findInnerPaths( x, y + 1, grid );
    }
  };

  findInnerPaths(x, y, grid);
  return solutions;
};

console.log( efficientLatticePath(20))
