/**
* Merge Sort Browser Example
*/

/**
* class
*/
function ArrayGenerator (numElements){
  this.dataStore = [];
  this.pos = 0;
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

/**
***************************
* mergeSort
***************************
*/

function merge (left =[], right =[]){
  var mergedArray = [];
  var lIndex = 0;
  var rIndex = 0;
  //total elements to merge
  var totalRange = left.length + right.length;

   //merging process;
   while(lIndex + rIndex < totalRange){
      var currentLeftElement  = left[lIndex];
      var currentRightElement = right[rIndex];

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

function mergeSort (array, debug = false){
  var range = array.length;
  // recursive termination:
  // if array length not > 1,
  // assume array is sorted
  if(range <= 1){
    return array;
  }
  //set up Divide and Conquer:
  // get middle
  var middleIdx = Math.floor(range /2 );
  // left subArray, starting from 0
  var leftSubArray = array.slice(0, middleIdx);
  // right subArray, starting from middleIdx
  var rightSubArray = array.slice(middleIdx);

   return merge( mergeSort( leftSubArray ) , mergeSort( rightSubArray ) );
}


var randomElements = 1000000;
var arrayToMergeSort3Data = new ArrayGenerator(randomElements);
var arrayToMergeSort3 = arrayToMergeSort3Data.getDataStore();

console.log("##############################################");
console.log("#                                            #");
console.log("           ***** merge sort *****            ");
console.log("#                                            #");
console.log("##############################################");

console.log("merge sort this => ", arrayToMergeSort3);

console.time(`mergeSortProcessing-[${randomElements}] elements | time : `);
var mergeSorted = mergeSort(arrayToMergeSort3);
console.timeEnd(`mergeSortProcessing-[${randomElements}] elements | time : `);

console.log("merge sorted!! => ", mergeSorted);



