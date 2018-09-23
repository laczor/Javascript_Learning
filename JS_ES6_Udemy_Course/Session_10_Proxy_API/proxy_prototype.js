
let person = {
	name: 'Istvan',
	age : 25,
};

//You can define all of the available traps, which you would like to process prior reaching the inner object

let handler = {
	get:function(target,name){
		return name in target ? target[name]:"Doesn't exists";
	}
};

var proxy = new Proxy({},handler);

//We will get back   person's name property
console.log(person.name);

//We set proxy to be the prototype of person Object 
Reflect.setPrototypeOf(person,proxy);

//Since person, inherited all of the proxy's properties, functions, getters, setters ..
// it will log out the text from our handler.
console.log(person.hobbies);

// ***Lesson 96 Proxy of proxies *****//
let handler_proto = {
};

//We create a proxy object, with an empty handler
let proto_proxy = new Proxy({},handler_proto);
//For create empty proxy, we add a new proxy, with an additional handler
let proxy2 = new Proxy(proto_proxy,handler);

//We set the person's prototype to be the proxy2 object
Reflect.setPrototypeOf(person,proxy2);

//As a result, the following will be the prototypal chain
// handler_proto --> handler -> person
// proto_proxy --> proxy2 -> person
console.log(person.hobbies);
