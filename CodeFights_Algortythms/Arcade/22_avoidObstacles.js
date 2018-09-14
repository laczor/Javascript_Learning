
var arr = [5, 3, 6, 7, 9];




//1. Method brute force.
// function avoidObstacles(arr) {
// 	var tempObj = {};
// 	var max = 0;
// 	var jumpLength = 2;
// 	var tempMax = 0;
//
// 	for (var i = 0; i <arr.length; i++) {
//
// 		if(!tempObj[arr[i]]){
// 			tempObj[arr[i]] = 1;
// 		}
//
// 		if(max < arr[i] ){
// 			max = arr[i];
// 		}
//
// 	}
//
// 	while(tempMax < max){
//
// 		tempMax += jumpLength;
//
// 		if(tempObj[tempMax]){
// 			jumpLength++;
// 			tempMax = 0;
// 		}
//
// 	}
// 	return jumpLength;
//
// }

//2. method using modulo



function avoidObstacles(arr) {
	var jumpLength = 2;
	var sollutionFound = false;

	while(sollutionFound == false){
		sollutionFound = true;

		for (var i = 0; i <arr.length; i++) {

			if(arr[i] % jumpLength ==0){
				sollutionFound = false;
				jumpLength++;
				break;
			}

		}

	}

	return jumpLength;

}



console.log(avoidObstacles(arr));
