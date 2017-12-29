/**
***************************
* bubbleSort
***************************
*/
const debugBubbleSort = require('./bubbleSort_debug');

const bubbleSort = function (data, debug = false){
	//copy array
	let copy = data.slice(data);
	const range = copy.length;
	if(debug){
		return debugBubbleSort(copy, range);
	}
	//iterate over array range
	for(let i = 0; i < range; i++){
		//bubble highest rank to end of array.
		for(let n = 0; n < range -1; n++){
			if(copy[n] > copy[n+1]) {
				[copy[n] , copy[n+1] ] = [copy[n+1] , copy[n] ];
			}
		}
	}
	return copy;
}

module.exports = bubbleSort;















