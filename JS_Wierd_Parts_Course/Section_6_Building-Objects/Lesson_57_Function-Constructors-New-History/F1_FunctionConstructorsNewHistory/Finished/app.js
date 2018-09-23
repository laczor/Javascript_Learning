//new is actually an operator, immediately a new empty object is created.
//since the executional context of the function will generate the keyword of "this"
//when using "new" the "this" variable will point to the newly created empty object in the memory
// if the function does not return anything, it will return the newly created empty object

//new keyword will create an object in the memory, instead of just calling the function, and returning the created object at the end of the function
// A function, which has basic constructor
function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

//It is just creating an object, with calling the functions, with the constructor
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);