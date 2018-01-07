/**

***************************************************************************************
* quickSort Examples
* ------------------------
*   debug path:
*   $node --inspect --debug-brk ./src/algos/quickSort/index.js
***************************************************************************************

> QuickSort =>

*/

/**
* dependencies
*/
const arrayGenerator = require('./../_helpers/arrayGeneratorClass');
const quickSort = require('./quickSort');

/**
* use
*/
const arrayToSort1 = [3, 99, 15, 85, 2, -69, 0, 44, 3265214, -87, 55];
const arrayToSort2 = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];
const randomElements = 5;
const arrayToSort3 = new arrayGenerator(randomElements).getDataStore();

console.log("##############################################");
console.log("#                                            #");
console.log("            ***** quick sort *****            ");
console.log("#                                            #");
console.log("##############################################");

console.log("quick sort this => ", arrayToSort3);

console.time(`quickSortProcessing-[${randomElements}] elements | time = `);
const quickSorted = quickSort(arrayToSort3);
console.timeEnd(`quickSortProcessing-[${randomElements}] elements | time = `);

console.log("quick sorted!! => ", quickSorted);

/**
* notes
*/
