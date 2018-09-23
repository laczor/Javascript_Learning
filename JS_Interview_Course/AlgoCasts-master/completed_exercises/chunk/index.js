// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//More elegant solution
//We are looping through the array, and we slice, chunked arrays from the original array and that's what we push into the cunked array.
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

/*
0.
  - We create a chunked array, which will be the created array of storing the chunk arrays.
1. Loop:
  - last: will be undefined since chunked is empty therefore !last ,(!undefined) will be true
  - Thus, it will push a new array object, to the chunked array
1. Loop finish:
  - So are a result, we are storing a reference to the array object, which is pushed to the chunked array
2. Loop:
  - Since ourobject, is not undefined and full, we push the current element to the last object, which is in the chunked array!!
3. Loop: 
  - Since the last array object is full, we push a new array object, with the current element in it to the chunked array.

**Trick:
- last array object is passed by reference, and pushed inside of an other array,(chunked)  
- So if you push anything to the last array, it will be a part of chunked as well.
*/

// function chunk(array, size) {
//   const chunked = [];								//Tha main array, which holds the chunked arrays.
// //If the input array.lengt is 0, it won't loop.

//   for (let element of array) {						      //Looping through each element
//     const last = chunked[chunked.length - 1];   //Keeping track of the last element, we are referencing array objects, not storing it by value!
//     if (!last || last.length === size) {			  //Will push a new array object, into chunked, if, last is not defined, or the size has been reached
//       chunked.push([element]);
//     } else {                                    //Will push the element to the last array ojbect, and since we are storing the last value by reference, it will push to the array, stored in the chnked array.
//       last.push(element);
//     }
//   }

//   return chunked;
// }

console.log(chunk([1,2,3,4,5,6],2));
module.exports = chunk;
