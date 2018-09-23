
// Lesson 97 You can wrap function objects as well!!
function log(message){
	console.log(message);

}

let handler = {
	apply : function(target,thisArg,argumentsList){
		if(argumentsList.length ==1){
					return Reflect.apply(target,thisArg,argumentsList);
		}
	}
}

let proxy = new Proxy(log,handler);
proxy("Hello",10);

// Lesson 98

let person2 = {
	name:"Istvan"
};

let handler2 ={
		get:function(target,name){
		return Reflect.get(target,property);
	},
};

//Destructure the created Proxy object, to store the proxy + the revoke property of the created object in seperate objects.
let {proxy3,revoke} = Proxy.revocable(person2,handler2);
// revoke will be a function object, of the proxy's objectproperty
console.log(proxy3.name); //okay
revoke();   //will remove the proxy wrapper
console.log(proxy3.name); //no proxy wrapped around the object