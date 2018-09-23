function b() {
    console.log('Called b!');
}

b();
//The variable 'a' has not been set, but memory allocated, and basic "undefined type has been allocated"
console.log(a);

var a = 'Hello World!';

console.log(a);