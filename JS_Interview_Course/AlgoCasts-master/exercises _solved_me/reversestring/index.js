// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//**1. Sollution ***///
// function reverse(str) {
// 	return str.split("").reverse().join("");

// }

//**2. Sollution ***///
function reverse(str) {
	let len = str.length;
	let reversed = "";
	for(i=len;i>=0;i--){
		reversed += str.charCodeAt(i);  
	}
}

module.exports = reverse;
