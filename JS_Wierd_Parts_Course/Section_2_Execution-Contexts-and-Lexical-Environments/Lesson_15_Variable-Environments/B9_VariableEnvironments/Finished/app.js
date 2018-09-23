function b() {
	var myVar;			   //With this we are not overwrtigin the global varible, we are just creating a new one in "b" execution context
    console.log(myVar);
}

function a() {
	var myVar = 2;			//This is a local variable defined in the 'a' execution context
    console.log(myVar);
	b();
}

var myVar = 1;    //So this is the global variable
console.log(myVar);
a();
console.log(myVar);
