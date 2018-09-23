// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
	if (size <= 0 || size>= array.length){ return array};				//Return immedeitaly, if it is 0, or bigger, or the same size
	let finalArr = [];													//Final array, to be returned
	let tempArr = [];													//Temporary array for the chunks
	let limit = size;													//Limit for the temporary array size
	let len = array.length;												//TO make the for loop faster

	for(i=0;i<len;i++){
		if(tempArr.length <limit){										//If the chunk is not full push the element here						
			tempArr.push(array[i]);
		} else{															//Else push the chunk to the array, empty it, and push the new element into the chunk
			finalArr.push(tempArr);
			tempArr = [];
			tempArr.push(array[i]);
		}
	}

	if(tempArr.length >0){												//Push the reamining chunk if it is not empty
		finalArr.push(tempArr);
	}	

	return finalArr;

}

console.log(chunk([1,2,3,4,5,6,7,8,9,10],4));

module.exports = chunk;
