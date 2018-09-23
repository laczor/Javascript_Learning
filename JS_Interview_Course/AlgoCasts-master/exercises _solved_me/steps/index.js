// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Rewritten in recursive looping
//n is the number, how many times, it should be console.log in total
//hash --> is the current string of "#"

function steps(n, hash="#") {			
	let str = hash;
	if(n===1){						//This is our base, if we reach 1, we return the concatenated "#" string.
		return console.log(str);
	}
	for(i=0;i<n-1;i++){				//If not, we add to the current hash the spaces which in total is(n-1)
		str +=" ";  
	}
	console.log(str) ;				//Concatenated hashes with spaces
	steps(n-1,hash+"#");			//We decrement the rows to be shown, + add basi hash string.
}

steps(3);

module.exports = steps;

// ***Solution 2 ***

// //console.logging all of the levels seperately
// function steps(n) {
// 	let str = '';								//Initial value for our returning text
// 	let hash = "";								//Initial value of our hash concatenated
// 	let space = "";								//Initial value of our hash concatenated
// 	for(i=1;i<=n;i++){							//looping for as many rows as the recieved integer
// 		if(n!=1){								//If we provide 1, we just return a prewritten string
// 			space = "";							//In every row, space amount is chaning, has to be set to ""
// 			hash +="#"; 						//In every row, from 1 we increment this string with 1 hash
// 			for(j=1;j<=n-i;j++){
// 				space += " ";					//We calculate how many spaces do we have in a row, in row 2 we have (total-2) spaces
// 			}	
// 		} else{
// 			return console.log('#' + space );   //If we provide 1, we just return a prewritten string
// 		}
// 		console.log( hash + space ) ;			//Will be modified in each loop (console.log each row)
// 		str += '\''+ hash + space + '\'\n';		//Will be modified in each loop (concatenate the string)
// 	}
// }

// steps(2);

// ***Solution 2 ***

//Rewritten with for loop.
// function steps(n) {
// 	let str = '';								//Initial value for our returning text
// 	for(i=0;i<n;i++){							//looping for as many rows as the recieved integer
// 		str ="";
// 		for(j=0;j<n;j++){
// 			if(j<=i){
// 			  str +="#";
// 			}else{
// 			  str +=" ";
// 			}
// 		}	
// 		console.log(str) ;			//Will be modified in each loop (console.log each row)
// 	}
// }

// steps(3);