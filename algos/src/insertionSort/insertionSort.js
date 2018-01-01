/**
***************************
* insertionSort
***************************
*/

//const debugInsertionSort = require('./insertionSort_debug');

const insertionSort = function (array) {
  //copy array
  array = array.slice();

  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

module.exports = insertionSort;
