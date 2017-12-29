/**
***************************
* Fun Stuff (in es2015+)
***************************
*/




/**
***************************
* ARRAYZZZZZZZZ
***************************
*/


/*
* flatten arrays!
*/
/*
function flatten(data, payload){
	//loop vars
	let index = -1,
		currentElement;
	//loop range
	const arrayLength = data.length;
	//payload
	(payload || (payload = []))

	//loop data to create final payload.
	while(++index < arrayLength){
		currentElement = data[index];

		//push number
		if(typeof currentElement === 'number'){
			payload.push(currentElement);
		} 
		//recurse array
		else if( Array.isArray(currentElement) ){
			flatten(currentElement, payload);
		}
	}

	return payload;
}

const dataToFlatten = [ 1, [], [2,[], 3], 4, [ [5, [6, 7,[] ], 8 ], 9], [10], {name:"niki"}, [],[],[11, [[[[12]]]]], 13, [[14, 15]] ];
const flattened = flatten(dataToFlatten); 
//console.log("flatten this => ", dataToFlatten);
//console.log("flattened!! => ", flattened);
*/




/*
* bubble sort
*/
/*
function bubbleSort(data){
	//copy array
	let copy = data.slice(data);
	const range = copy.length;

	//loop each element
	for(let i = 0; i < range; i++){
		//bubble highest rank to end of array
		for(let n = 0; n < range -1; n++){ 
			if(copy[n] > copy[n+1]) {
				[copy[n] , copy[n+1] ] = [copy[n+1] , copy[n] ];
			}
		}		
	}

	return copy;

}

const arrayToBubbleSort = [99, 15, 85, 2, -69, 0, 44, 3265214, -87, 55];
const bubbleSorted = bubbleSort(arrayToBubbleSort);

console.log("bubble sort this => ", arrayToBubbleSort);
console.log("bubble sorted!! => ", bubbleSorted);
*/








/*
* create voting tally
*/
/*
const votes = [
	"angular",
	"react",
	"react",
	"react",
	"angular",
	"backbone",
	"angular",
	"react",
	"vanilla",
	"ember"						
];


// generate vote tally
function tally (votes, curr) {
	if(!votes[curr]){
		votes[curr] = 1
	} 
	else {
		votes[curr] += 1;
	} 
	return votes;
}
const totalVotes = votes.reduce( tally , {});
console.log("tally these votes => ", votes);
console.log("toalVotes => ", totalVotes);
*/













