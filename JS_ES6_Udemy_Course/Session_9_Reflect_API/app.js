// // // MetaProgramming Code
// // // Evaluate our code at runtime.

// class Person {
// 	constructor(name){
// 		this.name = name;
// 	}
// }
// function ProtObj(){
// 	this.age = 27;

// }
// //We can create Objects with reflect
// // 1. Object to be created
// // 2. Arguments to pass to the constructor function
// // 3. To Assign a prototype object to the created Object
// let person = Reflect.construct(Person,['Steve'],ProtObj);

// console.log(person);  


// /************************************/

// // /** Lesson84 Calling functions with Reflect API**/
// // // Good idea to use Reflect and use centralized approach
// class Person2 {
// 	constructor(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}
// 	greet(arg){
// 		console.log(arg +'Hello i am' + this.name);
// 	}
// }

// let person2 = Reflect.construct(Person2,['Steve',25],ProtObj);
// Reflect.apply(person.greet,person,[]); 
// Reflect.apply(person.greet,{name:Anna},['...']); 
// //Will log out ...Hello i am Anna, since we passed an argument + an object to refer as this

// /************************************/

// /*Lesson 85 Reflect and Prototypes*/
// // You can access the prototype with reflect without usin __proto__
// class Person3 {
// 	constructor(name){
// 		this.name = name;
// 	}
// }

// let person3 = new Person();

// console.log(Reflect.getPrototypeOf(person));  
// console.log(Reflect.getPrototypeOf(person) == Person.prototype);  
// console.log(person.__proto__== Person.prototype);  

// // You can modify the prototype as well.

// let proto = {
// 	age:30,
// }

// Reflect.setPrototype(person3,proto);
// console.log(Reflect.getPrototypeOf(person));  

// /************************************/
/*Lesson 85 Reflect and Properties*/
// Really useful for the dynamic part referencing object properties
class Personx {
	constructor(name,age){
		this.name = name;
		this._age = age;
	}
	get age(){
		return this._age;
	}
}

let mum = {
	_age:30,
}

let personx = new Personx("Steve",25);
//Can get property
console.log(Reflect.get(personx,"name")); //person.name;
//Getters can be used as well.
console.log(Reflect.get(personx,"age")); //person.name;
//Modifying object properties
Reflect.set(personx,"name","Istvan"); //person.name = "Anna";
//Object,Property,NewProperty,Object to refer as "this."
Reflect.set(personx,"name","mum2",mum); //person.name = "Anna";
console.log(Reflect.get(personx,"name")); //person.name;
//Using Apply for the getter
console.log(Reflect.get(personx,"age",mum)); //person.age.apply(mum);

// /************************************/
/*Lesson 87 Reflect OwnProperties*/
//Core properties
console.log(Reflect.ownKeys(personx));

// /************************************/
/*Lesson 88 Create + Delete properties*/


// 1.0 Creating properties
Reflect.defineProperty(personx, "hobby",{
});

// personx.hobby  = "Cooking";			//can't assign to readonly
console.log('hobby not modified',personx);
// 1.1 Creating writable properties
Reflect.defineProperty(personx, "hobbies",{
	writable: true,
	value: ["Sports","Cooking"],
});

console.log('hobbies is hidden!',personx);
console.log('hobbies before',personx.hobbies);
personx.hobbies  = "Cooking";
console.log('hobbies after',personx.hobbies);
Reflect.deleteProperty(personx,'age');

// /************************************/
/*Lesson 89  Object Extension*/
// We can lock our object from extension
Reflect.preventExtensions(personx);
//We will see false, since it won't be extensible
console.log(Reflect.isExtensible(personx));