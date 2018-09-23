var a = 3;
console.log(typeof a);			//number

var b = "Hello";
console.log(typeof b);			//string

var c = {};
console.log(typeof c);		    //object

var d = [];
console.log(typeof d);         // object, isArray()
console.log(Object.prototype.toString.call(d)); // better! --> Array, we are converting the object to string.

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever..., will return an object

var z = function() { };
console.log(typeof z);	 //

