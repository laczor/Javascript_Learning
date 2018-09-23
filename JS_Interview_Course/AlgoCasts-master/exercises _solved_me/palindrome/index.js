// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//***** 1 Solution *** ///
function palindrome(str) {
	let len = str.length;
	for(i=0;i<len;i++){
		if(str.charCodeAt(i) !== str.charCodeAt(len-1-i)){
			return false;
		}
	}
	return true;
}

module.exports = palindrome;

// ***** 2 Solution *** ///
// function palindrome(str) {
// 	let string =  str.split("").reverse().join("");

// 	if(str === string){
// 		return true;
// 	}else{
// 		return false;
// 	}

// }
