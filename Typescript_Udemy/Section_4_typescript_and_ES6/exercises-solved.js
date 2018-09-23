// Exercise 1 - Maybe use an Arrow Function?
var double = (value)=>{return value*2;};
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
var greet = function (name = "Max") {
    console.log("Hello, " + name);
};
greet();
greet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers = [-3, 33, 38, 5];
console.log(...numbers);
 
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
console.log(newArray...);
 
// Exercise 5 - That's a well-constructed array. DESCTRUCTURING
var testResults = [3.89, 2.99, 1.38];
console.log([result1, result2, result3]=testResults);
 
// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
console.log({firstName, experience}=scientist);