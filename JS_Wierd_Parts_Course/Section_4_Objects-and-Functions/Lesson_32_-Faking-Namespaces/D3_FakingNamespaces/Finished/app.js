//The secong greet will overwrite the first greet variable
var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);
// THIS the same as the following

// english.greetings = "Hello":
var english = { 
    greetings: { 
        basic: 'Hello!' 
    } 
};

var spanish = {};

spanish.greet = 'Hola!';

console.log(english);
console.log(spanish.greet);