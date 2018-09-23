// polyfill for backward compatibility
if (!Object.create) {                                 //if the browser does have it or not
  Object.create = function (o) {
    if (arguments.length > 1) {                       //should have arguments
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}                                   //Creates an empty function
    F.prototype = o;                                  //Set the passed object as a prototype
    return new F();                                   //It will create an empty object due to new keyword
  };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

//You can create an empty object, with predefined prototype passed into the function
//By simply adding properties, you can overwrite them.
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);