/**
***************************
* mergeSort
***************************
*/

const debugMergeSort = require('./mergeSort_debug');

const merge = function(left =[], right =[]){
	const mergedArray = [];
	let lIndex = 0;
	let rIndex = 0;
	//total elements to merge
	const totalRange = left.length + right.length;

	 // merging process:
	 // loop through L/R arrays and
	 // push smallest value on
	 // mergedArray
	 while(lIndex + rIndex < totalRange){
	 		const currentLeftElement  = left[lIndex];
	 		const currentRightElement = right[rIndex];

	 		// nothing in left array,
	 		// add right element
	 		if(currentLeftElement == null){
	 			mergedArray.push(currentRightElement);
	 			rIndex++;
	 		}
	 		// nothing in right array,
	 		// add left element
	 		else if(currentRightElement == null){
	 			mergedArray.push(currentLeftElement);
	 			lIndex++;
	 		}
	 		else if(currentLeftElement < currentRightElement){
	 			mergedArray.push(currentLeftElement);
	 			lIndex++;
	 		}
	 		else {
	 			mergedArray.push(currentRightElement);
	 			rIndex++;
	 		}
	 }

	 return mergedArray;
};

const mergeSort = function (array, debug = false){

	if(debug){
		return debugMergeSort(array);
	}

	const range = array.length;

	// recursive termination:
	// if array length not > 1,
	// assume array is sorted
	if(range <= 1){
		return array;
	}

	//set up Divide and Conquer:
	// get middle
	const middleIdx = Math.floor(range /2 );
	// left subArray, starting from 0
	const leftSubArray = array.slice(0, middleIdx);
	// right subArray, starting from middleIdx
	const rightSubArray = array.slice(middleIdx);

	 return merge( mergeSort( leftSubArray ) , mergeSort( rightSubArray ) );

}

module.exports = mergeSort;















