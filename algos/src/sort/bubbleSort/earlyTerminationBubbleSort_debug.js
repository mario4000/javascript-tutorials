/**
*************************************
* earlyTerminationBubbleSort_debug
*************************************
*/

const debugEarlyTerminationBubbleSort = function(data){

	console.log(`Array to sort with Swap Early Termination: ${data}]`);

	let i = 0;

	while(true){
		let swapped = false;
		for(let n = 0; n < data.length -1; n++){

			console.log(`#################### [begin [ outer ${i} , inner ${n} ] ] #####################`);

			console.log( `\n comparison inner loop => ${n} \n`,
						 `data[n] => ${data[n]} \n`,
						 `data[n+1] => ${data[n+1]} \n` );

			if(data[n] > data[n+1]) {

				console.log(`***** SWAPPED! ***** => FROM: ${data[n]} / ${data[n+1]}  TO: ${data[n+1]} / ${data[n]}\n`);

				[data[n] , data[n+1] ] = [data[n+1] , data[n] ];
				swapped = true;
			}

			console.log(`array => ${data} `, "\n\n");
		}

		i++;
		if(!swapped) break;
	}

	debugger;

	return data;

}

module.exports = debugEarlyTerminationBubbleSort;






