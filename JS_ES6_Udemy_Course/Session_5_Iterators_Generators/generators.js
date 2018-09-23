



// MODIFY THE NPM START ACCORDINGLY



/*Lesson 49. Generators Basic
Looping over the yielded values which will gives us iterable values*/

function* select(){
	yield 1;
	yield 2;
	yield 3;
}

let generator = select();

console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); //{ value: 3, done: false }
console.log(generator.next()); //{ value: undefined, done: true }

/*LESSON 50 Generators in Action*/

let obj = {
	//We are passing the reference to our generator function object
	[Symbol.iterator]: gen,		
}
//Simple generator which will provide iterable objects
function *gen(){
	yield 1;
	yield 2;
}
// Now we can loop over elements with the generator
for(let el of obj){
	console.log(el);
}

/*LESSON 52 Controlling Iterators*/

function *gen2(end){
	for(let i=0; i<end;i++){
		try{
			yield i;
		}catch(err){
			console.log(err);
		}
	};
}

let it = gen2(2);
console.log(it.next());
console.log(it.throw("error")); //Will catch our errror.
console.log(it.next());
