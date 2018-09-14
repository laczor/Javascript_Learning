
'use strict';

// var inputArray = ["ab", "bb", "aa"];
var inputArray = ["abc",
	"abx",
	"axx",
	"abx",
	"abc"];
// var inputArray = ["ab",
// 	"ad",
// 	"ef",
// 	"eg"];

//1. So we are looping over the whole inputArray and it's elements and we are calling findNext
//2. Find next is a recursive function, which will return when the innner loop is finished, or the criteria is met.

//In summary, we are starting with the first element, and trying to find different strings only with 1 difference.
//If we find one, we exclude it from the array, and start searching in the remaining ones again until we find all of the elements as differencies
//If we can'T and there is still looping, we are trying out starting the recursion from the next i step.

function stringsRearrangement(a) {
	for (let i = 0; i < a.length; i++) {
		let remaining = findNext(a[i], a);
		if (remaining.length === 0) return true;
	}
	return false;
}

function findNext(current, a) {
	if (a.length === 0) return a;
	for (let i = 0; i < a.length; i++) {
		if (differsByOneChar(current, a[i])) {
			let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
			if (remaining.length === 0) return remaining;
		}
	}
	return a;
}

function differsByOneChar(s1, s2) {
	let mismatches = 0;
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) mismatches++;
		if (mismatches > 1) break;
	}
	return mismatches === 1;
}
console.log(stringsRearrangement(inputArray));
