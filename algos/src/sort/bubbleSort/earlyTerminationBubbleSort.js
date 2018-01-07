/**
***************************
* earlyTerminationBubbleSort
***************************
*/

const debugEarlyTerminationBubbleSort = require('./earlyTerminationBubbleSort_debug');

const earlyTerminationBubbleSort = function (data, debug = false){
	//copy array
	let copy = data.slice(data);
	if(debug){
		return debugEarlyTerminationBubbleSort(copy);
	}
	while(true){
		let swapped = false;
		for(let n = 0; n < copy.length -1; n++){
			if(copy[n] > copy[n+1]) {
				[copy[n] , copy[n+1] ] = [copy[n+1] , copy[n] ];
				swapped = true;
			}
		}
		if(!swapped) break;
	}
	return copy;
}

 module.exports = earlyTerminationBubbleSort;













