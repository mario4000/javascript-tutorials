/**

***************************************************************************************
* insertionSort Examples
* ------------------------
*   debug path:
*   $node --inspect --debug-brk ./src/algos/insertionSort/index.js
***************************************************************************************

> InsertionSort => The basic idea of insertion sort is to
  mentally divide the array into a sorted left section
  and an unsorted right section, moving an item 1 by 1
  from the unsorted right section into its rightful place
  in the sorted left section.

*/

/**
* dependencies
*/
const arrayGenerator = require('./../_helpers/arrayGeneratorClass');
const insertionSort = require('./insertionSort');

/**
* use
*/
const arrayToSort1 = [3, 99, 15, 85, 2, -69, 0, 44, 3265214, -87, 55];
const arrayToSort2 = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];
const randomElements = 5;
const arrayToSort3 = new arrayGenerator(randomElements).getDataStore();

console.log("##############################################");
console.log("#                                            #");
console.log("        ***** insertion sort *****            ");
console.log("#                                            #");
console.log("##############################################");

console.log("insertion sort this => ", arrayToSort3);

console.time(`insertionSortProcessing-[${randomElements}] elements | time = `);
const insertionSorted = insertionSort(arrayToSort3);
console.timeEnd(`insertionSortProcessing-[${randomElements}] elements | time = `);

console.log("insertion sorted!! => ", insertionSorted);

/**
* notes
*/
