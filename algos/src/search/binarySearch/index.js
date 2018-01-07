/**

***************************************************************************************
* binarySearch Examples
* ------------------------
*   debug path:
*   $node --inspect --debug-brk ./src/algos/search/binarySearch/index.js
***************************************************************************************

> Binary Search

  * This algorithm is called binary search because we
    divide the search problem into two (aka binary)
    sub problems.

  * Since in each recursive call we break down the search
    space in half, our problem size decreases exponentially,
    taking our worst case time complexity from O(n) to O(log n).
*/

/**
* dependencies
*/
const arrayGenerator = require('./../_helpers/arrayGeneratorClass');
const binarySearch = require('./binarySearch');


/**
* use
*/

/*
const arrayToSearch1 = [3, 99, 15, 85, 2, -69, 0, 44, 3265214, -87, 55];
const arrayToSearch2 = [72, 54, 59, 30, 31, 78, 2, 77, 82, 72];
const randomElements = 50;
const arrayToSearch3 = new arrayGenerator(randomElements).getDataStore();


console.log("##############################################");
console.log("#                                            #");
console.log("         ***** binary search *****            ");
console.log("#                                            #");
console.log("##############################################");

//console.log("search this => ", arrayToSearch3);

console.time(`searchProcessing-[${randomElements}]`);
const binarySearched = binarySearch(arraySearch3);
console.timeEnd(`searchProcessing-[${randomElements}]`);

//console.log("searched!! => ", binarySearched);
*/



/**
* notes
*/

/*

Algorithm Description:
=======================
* We start of by writing our `binarySearch` function that
  takes an array of numbers and an element we have to find.

* The function should return the index of the element
  if its found within the array.

* If the element is not found we can simply return -1

```js

//
// * Searches for specific element in a given sorted array
// * @returns the index of the element (-1 if its not found)
//
export function binarySearch(
  array: number[],
  element: number,
): number {
  return -1;
}

```

* Now to search for the element, one way to do that is
  to simply loop through all the elements till some
  element in the array matches the element we are
  searching for.

* If it matches we return the index.

```js
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) return index;
  }
```
* In the worst case the time complexity of this algorithm
  is O(n) since we have to access all the elements
  of the array.

* If we were to use the simple array prototype `findIndex`
  function it would internally do a similar loop over all
  the elements in the array and its time complexity
  will also be O(n)

```js

  return array.findIndex(x => x === element);

```
* We can do better than this O(n) runtime. These simple
  loop based implementations fail to take advantage of
  the fact that the given array is sorted.

* In binary search we recursively break down the problem
  into smaller ones. We will only search for the element
  within a given start, and end range of the array.
  We initialize this range to be the entire array.

```js

export function binarySearch(
  array: number[],
  element: number,
  start = 0,
  end = array.length - 1,
): number {

}

```

* Like all converging recursive algorithms, we will have a
  base case to terminate the recursion. For search we can
  terminate if the problem space has gone below 0. In this
  case we have not found our element and we can return -1.

* Next we simply divide the current problem space into
  two equal search spaces by finding the middle element
  of the current search subsection.

* If the middle element matches the element we are searching
  for, we have found our index, which is simply the middle.

* Else we check if the element we have to find is less
  than the middle element,

  - if so we recurse through the first half of the
    problem space as the element (if present) will
    have to be in that section.

  - otherwise, if the element is greater than the
    middle element, we recurse through the
    second half of the problem space.

```js

  if (end < start) return -1;
  const middle = Math.floor((start + end) / 2);
  return element === array[middle]
    ? middle
    : element < array[middle]
      ? binarySearch(array, element, start, middle - 1)
      : binarySearch(array, element, middle + 1, end);
```

*/
