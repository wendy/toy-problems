// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
// It is possible to make £2 in the following way:

// 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
// How many different ways can £2 be made using any number of coins?

var findCoinSums = function(total){
  var results = 0;
  var changeLeaders = [200,100,50,20,10,5,2,1]

  var searchChange = function(moneyBall, index){
    if( moneyBall === 0 ){
      results += 1;
      return;
    }

    for( var leader = index; leader < changeLeaders.length; leader++ ){
      if( moneyBall >= changeLeaders[leader] ){
        moneyBall -= changeLeaders[leader]
        searchChange(moneyBall, leader);
        moneyBall += changeLeaders[leader]

      }
    }
  }

  searchChange(total, 0)
  return results;
};

console.log( findCoinSums(200) );
