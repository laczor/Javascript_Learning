
/****Lesson 30****/

// Symbol is an object
let symbol = Symbol('name debug');	//name is for debugging
let symbol2 = Symbol('name2');
console.log(symbol);		//ObjectSymbol(name)
console.log(typeof symbol); //"symbol"
console.log(symbol == symbol2);	
//false, since symbols are unique

/***Perfect for METADATA like timestamp*/
let obj = {
	name: "Max",
	[symbol]:22,
}
console.log(obj);			//symbol will be hidden
console.log(obj[symbol]);	//symbol still accessible


/*Lesson 31 Shared symbol*/
let symbol3 = Symbol.for('age');
let symbol4 = Symbol.for('age');

console.log(symbol3 == symbol4); 
//Will be shared, not unique!


//****Accessing Metadata outside of the function
//Also, the symbols are not overwriting the objects properties!!
let symbol0 = Symbol.for('sharedAge');

let person= {
	name : "Steve",
	age:30,
}

function changeAge(person){
	let ageSybmol = Symbol.for("sharedAge");
	person[ageSybmol] = 27;
}

changeAge(person);
console.log(person[symbol0]);	//27
console.log('Original Property',person["age"]);		//30	

/***LESSON43 Known Symbols*/
// For the Clasess, there are quite of few of static fields

class Person {
}

Person.prototype[Symbol.toStringTag] = "Person";

let person0 = new Person();
console.log('Person Object-->',person0);		//Will be Object Person
// Sharedid 
// https://developer.mozilla.org/hu/docs/Web/JavaScript/Reference/Global_Objects/Symbol

