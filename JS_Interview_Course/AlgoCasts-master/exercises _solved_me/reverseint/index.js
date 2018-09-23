// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

	if(n ==0) {return n; }				//Check he input if it 0 return immediately

	let str = n.toString();				//Convert integer to string
	let len = str.length;				//Define it outside the loop, for faster performance
	let limit = 0;						//Will do the looping i the string until the limit
	let reversed ="";					//Basic value
	if(str.charAt(0)=="-"){
	  	limit = 1;						//Will skip the looping of the "-"
	  	reversed ="-";					//Will add to the reversed string "-"
	 }

	for(i=len;i>=limit;i--){			//Reversing
	    reversed += str.charAt(i);
	}
	while(reversed.charAt(limit) =="0"){	//removing zeros
		reversed = reversed.replace("0","");
	}
	return parseInt(reversed);				//returnin converted integer
}

module.exports = reverseInt;
