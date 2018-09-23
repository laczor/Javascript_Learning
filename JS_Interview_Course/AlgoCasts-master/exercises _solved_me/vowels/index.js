// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	let obj = {'a':1,'e':1,'i':1,'o':1,'u':1};
	let counter = 0;
	for(i=0;i<str.length;i++){
		if(obj[str[i].toLowerCase()]){						//trying to reference the object, if it is falsy, it is not a property
			counter++;
		}
	}
	return counter;
}

console.log( vowels('Hi Thereee!'));
module.exports = vowels;
