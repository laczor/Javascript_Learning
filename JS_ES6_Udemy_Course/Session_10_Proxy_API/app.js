
let person = {
	name: 'Istvan',
	age : 25,
};

//You can define all of the available traps, which you would like to process prior reaching the inner object

let handler = {
//target: Object
//name: is the property to access
	get:function(target,name){
//**1**Check if the name exist in the target, if yes, it will return the object property, else some taxt		
		return name in target ? target[name]:"Doesn't exists";
	},
	set: function(target,property,value){
		if(value.length >2){

//**2**We can combine it with Reflect as well.			
			// Reflect.set(target,property,value);
			Reflect.set(target,property,value);
		}else{

		}
	}
};
//Target object, + the handler object, with the set traps
var proxy = new Proxy(person,handler);

console.log(proxy.age);       //Will return the object, since it is there
console.log(proxy.surname);   //will return text, instead of undefined

proxy.name = "hi";			
console.log(proxy.name);     //Will not overwrite the name since we have a setter handler

proxy.name = "Istvan Man!";			
console.log(proxy.name);     //Will not overwrite the name since we have a setter handler

