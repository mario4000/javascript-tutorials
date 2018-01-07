/**
***************************
* binarySearch
***************************
*/
/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */

const debugBinarySearch = require('./binarySerach_debug');

const binarySearch = function (
  array,
  element,
  start = 0,
  end = array.length - 1,
){
  if (end < start) return -1;
  const middle = Math.floor((start + end) / 2);
  return element === array[middle]
    ? middle
    : element < array[middle]
      ? binarySearch(array, element, start, middle - 1)
      : binarySearch(array, element, middle + 1, end);
}

module.exports = binarySearch;
