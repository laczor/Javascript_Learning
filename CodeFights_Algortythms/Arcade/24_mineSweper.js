

var matrix = [[false, false, false],
			  [false, false, false],]


// minesweeper(matrix) = [[1, 2, 1],
// 					[2, 1, 1],
// 					[1, 1, 1]]


function minesweeper(matrix) {
	var resultMatrix = cloneMatrix(matrix)

    var matrixWidth = matrix[0].length;
    var matrixHeight = matrix.length;

	var x = 0;
	var y = 0;

	while(y < matrixHeight){

        resultMatrix[y][x] = calculateFieldValue(matrix,y,x,matrixWidth,matrixHeight);
		x++;
		if(x == matrixWidth){
			x = 0;
			y++;
		}
	}

	return resultMatrix;

}


calculateFieldValue = function(matrix,y,x,matrixWidth,matrixHeight){

		var tempCounter = 0;

		if(matrix[y-1] != undefined && matrix[y-1][x-1] != undefined && matrix[y-1][x-1] === true){
			tempCounter++;
		}
		if(matrix[y][x-1]!=undefined && matrix[y][x-1] ===  true){
			tempCounter++;
		}
		if(matrix[y+1] != undefined  && matrix[y+1][x-1] != undefined  && matrix[y+1][x-1] === true){
			tempCounter++;
		};

		if(matrix[y-1] != undefined  && matrix[y-1][x] && matrix[y-1][x] === true){
			tempCounter++;
		}
		if(matrix[y+1] != undefined && matrix[y+1][x]===  true){
			tempCounter++;
		};


		if(matrix[y-1] != undefined && matrix[y-1][x+1] != undefined && matrix[y-1][x+1] === true){
			tempCounter++;
		};


		if(matrix[y][x+1] != undefined && matrix[y][x+1] === true){
			tempCounter++;
		};

		if(matrix[y+1]!= undefined && matrix[y+1][x+1] != undefined && matrix[y+1][x+1] === true){
			tempCounter++;
		};


		return tempCounter;

};

cloneMatrix = function(matrix){
	var tempMatrix = [];

    for (var i = 0; i < matrix.length; i++) {

        tempMatrix.push(matrix[0].slice(0));

    }
    return tempMatrix;

}


console.log('--->', minesweeper(matrix));
