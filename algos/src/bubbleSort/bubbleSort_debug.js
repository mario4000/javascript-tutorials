/**
***************************
* bubbleSort_debug
***************************
*/

const debugBubbleSort = function(data, max){

	console.log(`Array to sort: ${data}]`);

	for(let i = 0; i < max; i++){

		console.log(`#################### [begin ${i}] #####################`);

		for(let n = 0; n < max -1; n++){
			console.log( `\n range outer loop => ${i} \n`,
						 `comparison inner loop => ${n} \n`,
						 `data[n] => ${data[n]} \n`,
						 `data[n+1] => ${data[n+1]} \n` );

			if(data[n] > data[n+1]) {

				console.log(`***** SWAPPED! ***** => FROM: ${data[n]} / ${data[n+1]}  TO: ${data[n+1]} / ${data[n]}\n`);

				[data[n] , data[n+1] ] = [data[n+1] , data[n] ];
			}

			console.log(`array => ${data} `, "\n\n");

		}

		console.log(`!!!#################### [end ${i}] #####################`);

	}

	debugger;

	return data;
}

module.exports = debugBubbleSort;















