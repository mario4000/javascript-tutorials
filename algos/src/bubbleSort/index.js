/**

***************************************************************************************
* bubbleSort Examples
* ------------------------
*   debug path:
*   $node --inspect --debug-brk ./src/algos/bubbleSort/index.js
***************************************************************************************



> Bubble sort is considered the simplest
  sorting algorithm to implement.

	@ The function takes an array of numbers as an argument
  	  and will return a sorted array of numbers.

	@ Within the function we create a copy of the
		original array using `slice`.

	@ And return this array.

	@ Before returning it we will sort it using bubble sort.

	@ Bubble sort works by looping over the input array n times

============================================================================
  In each iteration the goal is to *Bubble* the highest
  ranking value to the end using SWAP in place.
============================================================================
*/

/**
* dependencies
*/
const arrayGenerator = require('./../../_helpers/arrayGeneratorClass');
const bubbleSort = require('./bubbleSort');
const earlyTerminationBubbleSort = require('./earlyTerminationBubbleSort');


/**
* use
*/

/*
const arrayToBubbleSort1 = [3, 99, 15, 85, 2, -69, 0, 44, 3265214, -87, 55];
const arrayToBubbleSort2 = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];
const randomElements = 50;
const arrayToBubbleSort3 = new arrayGenerator(randomElements).getDataStore();


console.log("##############################################");
console.log("#                                            #");
console.log("           ***** bubble sort *****            ");
console.log("#                                            #");
console.log("##############################################");

//console.log("bubble sort this => ", arrayToBubbleSort3);

console.time(`bubbleSortProcessing-[${randomElements}]`);
const bubbleSorted = bubbleSort(arrayToBubbleSort3);
console.timeEnd(`bubbleSortProcessing-[${randomElements}]`);

//console.time(`earlyTerminationBubbleSortProcessing-[${randomElements}]`);
//const earlyBubbleSorted = earlyTerminationBubbleSort(arrayToBubbleSort3);
//console.timeEnd(`earlyTerminationBubbleSortProcessing-[${randomElements}]`);

//console.log("bubble sorted!! => ", bubbleSorted);
*/



/**
* notes
*/

/*

Algorithm Description:
=======================

* Loop through all the items in the array

* Check if the current value on the left is greater
  than the current value on the right.

* If L > R, swap the variables at the two positions.

* SWAP ensures highest value is bubbled to
  last position of the array.

* Since comparison include the NEXT AVAILABLE ELEMENT
  j+1, terminate the inner loop 1 before the last index.


```js

export function bubbleSortConcept(array: number[]): number[] {
  array = array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
```

Sort the array [4,3,2,1].
Expect final result to be 1,2,3,4.
Within the function, log out the original array.
Also log out array when swap occurs.

```js

// simple bubbleSortConcept

export function bubbleSortConcept(array: number[]): number[] {
  array = array.slice();
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  return array;
}
bubbleSortConcept([4, 3, 2, 1]);
```

Note that instead of always iterating n times
we can easily optimize the algorithm
to terminate early.


```js

//  Idiomatic bubble sort implementation
export function bubbleSort(array: number[]): number[] {
  array = array.slice();
  while (true) {
    let swapped = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}
`
``
*** delete the outer for
We get rid of this always n times iterating outer loop.

***let swapped = false;
We create a variable to track if any bubbling takes place.

***in if swapped = true
Note it down whenever we swap a variable

***if (!swapped) break;
Break out once no more swapping is needed.

***while(true)
* Wrap the whole thing in a while loop that terminates
if no variable bubbling happens in an iteration.

This implementation is similar to the previous one with
a simple addition of early termination. This also explains
the main real world use case of bubble sort, which is,
if you only have a few values that need to be swapped
around, bubble sort can be pretty fast.


Performance:
===============

In the worst case this whole inner for
loop of n iterations will run O of n times
resulting in a time complexity of O n squared.

Since we are doing the array swaps in place
the space complexity is O(n).



More:
===============

The bubble sort gets its name because when data are sorted
using the algorithm, values float like a bubble from one end of
the array to the other. Assuming you are sorting a set of
numbers into ascending order, larger values float to the right
of the array and lower values float to the left.

This behavior is the result of the algorithm moving through
the array many times, comparing adjacent values, and swapping
them if the value to the left is greater than the value
to the right.

Here is a simple example of the bubble sort.
We start with the following list:

=> E A D B H


The first pass of the sort yields the following list:
(The first and second elements are swapped.)

=> A E D B H



The next pass of the sort leads to:
(The second and third elements are swapped.)

=> A D E B H


The next pass leads to the following order:
(The third and fourth elements are swapped.)

=> A D B E H


And finally, the second and third elements
are swapped again, leading to the final order:

=> A B D E H






*/



