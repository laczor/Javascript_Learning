
function * numbers(){
	let result = 1 + 1;
	return 20 + (yield result);
}


const generator = numbers();

//The execution at the *yield* keyword is paused, and the yielded value has been returned

generator.next();		//value --> 2 -- {'value':2, "done":false}
generator.next();		// value --> 30 -- {'value':30, "done":true}

//if we pass a value to the .next() we will overwrite the yielded value

generator.next(10);