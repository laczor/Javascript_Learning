
function * list(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	yield 6;
	yield 7;
}


const generator = list();

//The execution at the *yield* keyword is paused, and the yielded value has been returned

generator.next();		//value --> 1 -- {'value':1, "done":false}
generator.next();		// value -->2 -- {'value':2, "done":true}

//or we can loop over the yield steps

let numbers = [];
for (let value of generator){
	numbers.push(value);
}
console.log(numbers);