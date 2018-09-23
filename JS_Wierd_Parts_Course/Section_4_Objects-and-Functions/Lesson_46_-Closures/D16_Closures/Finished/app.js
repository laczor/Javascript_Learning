//So we are creating a function, which returns a function

function greet(whattosay) {

   return function(name) {
       console.log(whattosay + ' ' + name);
   }

}
//Creating the inner function and storing it's reference
var sayHi = greet('Hi');
//passing an argument to the inner function
sayHi('Tony');
greet('Hi')("Thony");
