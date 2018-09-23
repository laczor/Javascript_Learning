// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

// *****Recursion One ****
function pyramid(n, hash="#") {
	if(n===1){						//This is our base, if we reach 1, we return the concatenated "#" string.
		return console.log(hash);
	}

	let space = '';
	for(i=0;i<n-1;i++){				//If not, we add to the current hash the spaces which in total is(n-1)
		space +=" ";  
	}

	console.log(space + hash + space) ;				//Concatenated hashes with spaces
	pyramid(n-1,hash+"##");			//We decrement the rows to be shown, + add basi hash string.
}

//******Normal with creating the rows****
//  function pyramid(n) {
// 	let hash ="#";
// 	for(i=0;i<n;i++){							//looping for as many rows as the recieved integer
// 		let str ='';								//Initial value for our returning text
// 		for(j=0;j<n-i-1;j++){
// 			str +=" ";
// 		}	
// 		console.log(str + hash + str) ;			//Will be modified in each loop (console.log each row)
// 		hash +="##"; 
// 	}
// }


pyramid(5);

module.exports = pyramid;


