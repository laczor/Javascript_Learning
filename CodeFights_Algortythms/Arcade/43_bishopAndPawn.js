
var a = 'h1';
var b = 'h3';

//We are looping over the whole possibilites, given the the fact that the position has to be between 0 and 9.
//We have for directions, with the incrementation stored in an array
//We use the incrementation positions, in a loop until we find a matching, or start it from other position value pairs

function bishopAndPawn(bishop, pawn) {

	var loopingPosititons = [[-1,1],[1,1],[1,-1],[-1,-1]];
	var abcPos = ['x','a','b','c','d','e','f','g','h'];
	var startX = abcPos.indexOf(bishop.charAt(0).toLowerCase());
	var startY = parseInt(bishop.charAt(1),10);

	var result = false;

	for (let i = 0; i <loopingPosititons.length ; i++) {

		var stepX = startX + loopingPosititons[i][0];
		var stepY = startY + loopingPosititons[i][1];

		while(0 < stepX && stepX < 9 && 0 < stepY && stepY) {

			if(abcPos[stepX]+stepY == pawn ){
				result = true;
				break;
			}

			stepX +=loopingPosititons[i][0];
			stepY +=loopingPosititons[i][1];

		}

	}

	return result;

}


console.log(bishopAndPawn(a,b));


function bishopAndPawn2(bishop, pawn) {
	return Math.abs(bishop[0].charCodeAt()-pawn[0].charCodeAt())===Math.abs(bishop[1]-pawn[1])
}
