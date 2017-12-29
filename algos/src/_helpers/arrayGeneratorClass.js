/**
***************************
* CArray - array generator
***************************
*/

/**
* class
*/
const ArrayGenerator = function(numElements){
	this.dataStore = [];
	this.pos = 0;
	//number
	this.numElements = numElements; 
	//initialize data
	for(var i = 0; i < numElements; i++){
		this.dataStore[i] = i;
	}
	this.populateData();
}

ArrayGenerator.prototype = {
	constructor: ArrayGenerator,
	getDataStore:function(){
		return this.dataStore;
	},	
	populateData:function(){
		for (var i = 0; i < this.dataStore.length; ++i) {
			this.dataStore[i] = Math.floor(Math.random() * (this.numElements+ (Math.random()*8) ));
		}		
	},	
	insert: function(element){
		this.dataStore[this.pos++] = element;
	},
	swap: function(arr, left, right){
		var temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
	},
	clear: function(){
		for (var i = 0; i < this.dataStore.length; ++i) {
			this.dataStore[i] = 0;
		}
	},
	print: function(){
		let printLine="";
		this.dataStore.forEach(function(v, i){
			printLine = ( i > 0 && i % 5 === 0)
						? `${printLine} ${v} \n`
						: `${printLine} ${v} `;
		});
		return printLine;
	},	
	toString:function(){
		return ["Object ArrayGenerator"]; 
	}	
}




module.exports = ArrayGenerator;


/**
* TESTS
*/

//var test = new ArrayGenerator(15);
//console.log(test.print());















