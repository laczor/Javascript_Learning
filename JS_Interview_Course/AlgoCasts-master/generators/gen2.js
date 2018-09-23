
function * list(){
	yield 1;
	yield 2;
	yield* moreNumbers() ;
	yield 5;
}

//The generator will call the inserted other generator function and will yield through of its content
function * moreNumbers(){
	yield 3;
	yield 4;
}


const generator = list();

let numbers = [];
for (let value of generator){
	numbers.push(value);
}
console.log(numbers);