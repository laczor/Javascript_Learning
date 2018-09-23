// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	let temp = null;
	for(let i = 0; i<arr.length;i++){
		for(let y = 0; y<=arr.length-i;y++){
			if(arr[y]>arr[y+1]){
				temp = arr[y+1];
				arr[y+1] = arr[y];
				arr[y] = temp;
			}
		}
	}	
	return arr;
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}
function mergeSort(arr) {

}

function merge(left, right) {

}
let array = [100, -40, 500, -124, 0, 21, 7,-1000];
// console.log(bubbleSort(array));
console.log(selectionSort(array));

module.exports = { bubbleSort, selectionSort, mergeSort };

/*My first selection Sort*/
// function selectionSort(arr) {
// 	let min = null;
// 	let index = null;
// 	let temp = null;
// 	for(let i = 0; i<arr.length;i++){
// 		index = i;
// 			for(let y = i; y<arr.length;y++){
// 				if(arr[y]<array[index]){
// 					index = y;
// 				}
// 			}
// 		temp = arr[i];
// 		arr[i] = arr[index];
// 		arr[index] = temp;
// 	}
// 	return arr;	

// }