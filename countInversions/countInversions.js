var fs = require('fs');
var arr = [];
var data = fs.readFileSync('countInversions.txt', 'utf8');

arr = data.split('\n');
arr.pop();

var count = countInversions(arr);
console.log(count);

function countInversions(arr) {
  var count = 0;

  function mergeSort(arr, length) {
    if (length < 2) { return arr; }
    var middle = Math.ceil(length/2);
    var left = mergeSort(arr.slice(0,middle),middle);
    var right = mergeSort(arr.slice(middle), length - middle);
    var merged = [];
    count += merge(left, right, merged, length);
    return merged;
  };

  mergeSort(arr, arr.length);
  return count;
};


function merge(left, right, merged, length) {
  var l = 0;
  var r = 0;
  var inversions = 0;

  for (var m = 0; m < length; m++) {
    if (right[r] === undefined || parseInt(left[l], 10) <= parseInt(right[r], 10)) {
      merged[m] = left[l];
      l++;
    } else {
      merged[m] = right[r];
      r++;
      inversions += left.length - l;
    }
  }

  return inversions;
};