

var image = [[7, 4, 0, 1],
			 [5, 6, 2, 2],
			 [6, 10, 7, 8],
			 [1, 4, 2, 0]];


// boxBlur(image) = [[5, 4],
// 	                 [4, 4]];





function boxBlur(image) {


	var imageWidth = image[0].length;
	var imageHeight = image.length;
	var resultArr = [];
	var tempArr = [];

	var x = 0;
	var y = 0;

	//Will go until all of the possible 3X3 cubes are checked.
	while( y < imageHeight-2 ){
		for (var i = y; i < y+3 ; i++) {

			for (var j = x; j < x + 3; j++) {

				tempArr.push(image[i][j]);

			}
		}
		//It is necessary to store the gathered values together
		if(!Array.isArray(resultArr[y])) {
			resultArr[y] = [];
		}

		resultArr[y].push(calculateAverage(tempArr));
		tempArr = [];
		x++;

		if(x+3 > imageWidth ){
			x = 0;
			y++
		}
	}

	console.log(resultArr);

	return resultArr;
}

function calculateAverage(arr){

	var result = 0;
	for (var i = 0; i <arr.length ; i++) {
			result += arr[i];
	}
	return Math.floor(result/ arr.length);
}



boxBlur(image);



