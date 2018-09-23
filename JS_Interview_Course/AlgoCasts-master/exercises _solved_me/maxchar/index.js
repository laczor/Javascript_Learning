// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
 let max = 0;										//This is to store the max value
 let maxCharacter = "";							    //This is to store the max characther string, which will be returned back
 let charsObj = {};									//This is our mapped table
 let len = str.length;								//Declared outside of the for loop, so it is faster
 let char = "";										//Same declared outside

 for(i=0;i<len;i++){
 	char = str[i];
  	charsObj[char] = charsObj[char] +1 || 1; 		//Check if it can find the charachter as a property of the object

 	if (charsObj[char] > max) {						//Instead of looping again over, we keep it O(n) if we keep track of the max value
 		max = charsObj[char];
 		maxCharacter = char;
 	}
 }
 return maxCharacter;

}

module.exports = maxChar;
