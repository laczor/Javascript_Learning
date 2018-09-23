// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	let results = [];
	let startRow = 0;
	let endRow = n-1;
	let startCol = 0;
	let endCol = n-1;
	let counter = 1;

	for(i=0;i<n;i++){							//To fill with n number of arrays
		results.push([]);
	}
//The lop											
	while(startRow <= endRow || startCol <= endRow){
//Loop to fill the Top Row 
		for(i=startCol;i<=endCol;i++){
			results[startRow][i] = counter;
			counter++;
//Loop to fill the RightMost Column 
		}
		startRow++;
		for(i=startRow;i<=endRow;i++){
			results[i][endCol] = counter;
			counter++;
		}
//Loop to fill the Bottom Row 
		--endCol;
		for(i=endCol;i>=startCol;i--){
			results[endRow][i]=counter;
			counter++;
		}
//Loop to fill the LeftMost Col 
		--endRow;
		for(i=endRow;i>=startRow;i--){
			results[i][startCol]=counter;
			counter++;
		}
		startCol++;
	}
console.log(results);
return results;

}

matrix(6);
module.exports = matrix;
