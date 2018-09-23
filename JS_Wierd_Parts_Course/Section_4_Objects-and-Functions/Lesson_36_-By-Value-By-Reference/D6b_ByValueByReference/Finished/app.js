// by value (primitives)
var a = 3;
var b;

b = a;			//It will create a new spot in memory for b, and it will copy a
a = 2;
//Copies of each other, they are stored in two different spots in memory
console.log(a);
console.log(b);

// by reference (all objects (including functions)) are stored as reference
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);