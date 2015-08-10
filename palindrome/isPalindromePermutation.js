function isPP(str) {
  var frequencies = {};
  var odds = 0;

  for (var i = 0; i < str.length; i++) {
    if (!frequencies[str[i]]) {
      frequencies[str[i]] = 1;
      odds++;
    } else {
      frequencies[str[i]] += 1;
      frequencies[str[i]] % 2 === 1 ? odds++ : odds--;
    }
  }

  return odds < 2;
};

console.log( isPP('abcbcbb') );