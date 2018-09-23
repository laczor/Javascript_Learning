
//Created object to reference.
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
//since it will be executed inside an object, "this" will refer to the object
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
        
    }
}

//here right now "this" refers to the window object, unless we use apply, or bind functions
//since this function "getFullName" is not part of the window object
var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}

//Here we are using the built of bind() property of any function object, where we pass an object, which will be referred later as "this"
var logPersonName = logName.bind(person);
//Called later, with tha already passed varible
logPersonName('en');

//It is executing the function, with the passed object and arguments
logName.call(person, 'en', 'es');           //Pass coma seperated arguments
logName.apply(person, ['en', 'es']);        //Pass an array of arguments

// apply, can be used in IIFE as well!
(function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------');
    
}).apply(person, ['es', 'en']);

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a*b;   
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));