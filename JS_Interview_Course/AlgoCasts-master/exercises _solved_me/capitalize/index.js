// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 let arr =	str.split(" ");
	for(i=0;i<arr.length;i++){
		arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1);
	}

 return arr.join(" ");
}
console.log(capitalize('i am a cool guy'));


module.exports = capitalize;
