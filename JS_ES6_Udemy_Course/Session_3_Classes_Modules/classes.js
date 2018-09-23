
/*****ES6 Classes*/
class Person {
	constructor(name){
		this.name = name;
	}
	greet(){
		console.log(`Hello this is the ${this.name}\'s greeting`);
	}
}

class Steve extends Person {
	constructor(name){
		super();
		this.name = name;
	}
	greetSteve(){
		console.log('i greet as Steve');
	}
	greetSuper(){
		super.greet();
	}
}

let stevey = new Steve("Istvan");

stevey.greet();
stevey.greetSteve();
stevey.greetSuper();


/*****STATIC Methods*/

class Helper {
	logService(message){
		console.log('Logged: ',message);
	}
}

let helperObj = new Helper();
helperObj.logService('Initialized Helper Object');

class HelperStatic {
	static logService(message){
		console.log('Logged: ',message);
	}
}

HelperStatic.logService('static function has been used');

/****GETTERS / Setters*/

class PersonGetSet {
	constructor(name){
//Due to setter, you have to  define it with this._name, not with this.name		
		this._name = name;
	}
//Will be activaded upon PersonGetSet.name
//
	get name(){
		return this._name.toUpperCase();
	}
	set name(value){
		if(value.length>3){
			this._name = value;
		}else{
			console.log("Rejected");
		}
	}
}

let p = new PersonGetSet('TestName');

console.log(p.name);		//Should be TESTNAME, due to built in getter
p.name = "SS";				//Should "Rejected" due to built in setter
p.name = "Modified name";
console.log(p.name);		//Should be "Modified name"