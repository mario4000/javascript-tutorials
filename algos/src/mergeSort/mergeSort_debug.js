/**
***************************
* mergeSort
***************************
*/

const debugMerge = function(left =[], right =[]){
	const mergedArray = [];
	let lIndex = 0;
	let rIndex = 0;
	//total elements to merge
	const totalRange = left.length + right.length;

	console.log(`\n\n To merge: \n `);
	console.log(`LeftArray   => `, left );
	console.log(`RightArray  => `, right );

	 // merging process:
	 // loop through L/R arrays and
	 // push smallest value on
	 // mergedArray
	 while(lIndex + rIndex < totalRange){

	 		const currentLeftElement  = left[lIndex];
	 		const currentRightElement = right[rIndex];

			console.log(`\n !! MERGING \n`,
									`currentLeftElement =>  ${currentLeftElement} \n`,
									`currentRightElement => ${currentRightElement} \n\n`);

	 		// nothing in left array,
	 		// add right element
	 		if(currentLeftElement == null){

			 console.log(`no left element  |  pushed currentRightElement =>  ${currentRightElement} \n`);
	 			mergedArray.push(currentRightElement);
	 			rIndex++;
	 		}
	 		// nothing in right array,
	 		// add left element
	 		else if(currentRightElement == null){
			 console.log(`no right element  |  pushed currentLeftElement =>  ${currentLeftElement} \n`);
	 			mergedArray.push(currentLeftElement);
	 			lIndex++;
	 		}
	 		else if(currentLeftElement < currentRightElement){
			 console.log(`pushed low value currentLeftElement =>  ${currentLeftElement} \n`);
	 			mergedArray.push(currentLeftElement);
	 			lIndex++;
	 		}
	 		else {
			 console.log(`pushed low value currentRightElement =>  ${currentRightElement} \n`);
	 			mergedArray.push(currentRightElement);
	 			rIndex++;
	 		}

	 }

debugger;

	console.log(` mergedArray => ${mergedArray} \n`);
	console.log(`=======================================================`);
	console.log(` Merging Completed!`);
	console.log(`=======================================================\n\n`);

	 return mergedArray;
};

const debugMergeSort = function (array){

	const range = array.length;

	console.log(`=======================================================`);
	console.log(` Starting array => `, array );
	console.log(` range          => `, range );
	console.log(`=======================================================`);

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

	console.log(`middleIdx (divider) => `, middleIdx);
	console.log(`leftSubArray        => `, leftSubArray);
	console.log(`rightSubArray       => `, rightSubArray);

debugger;

	 return debugMerge( debugMergeSort( leftSubArray ) , debugMergeSort( rightSubArray ) );

}

module.exports = debugMergeSort;















