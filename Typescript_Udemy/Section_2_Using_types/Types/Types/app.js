//Javascript has dynamic types, typescript has static types
// You define types once and use it.
// string
var myName = 'Max';
// myName = 28;
// number, no differentiantion between integer, float
var myAge = 27;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;  --> will fail!
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array, (array of any type of element)
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;
// tuples  //(mixed types)
var address = ["Superstreet", 99];
// enum    //Make numbers, more expressive, an object with properties
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any    //You can assign Any kind of types, no compilation check
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions, should return a string
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void         //Will not return anything
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));
// function types
// We define a ES6 funcion to be an actual type as wel
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects    //We can define, how an object should look like
var userData = {
    name: "Max",
    age: 27
};
// userData = {
//     a: "Hello",
//     b: 22
// };
// complex object
// Sould be an object, with a data & output property
// data should be an array of numbers
// output should be a function which return an array of numbers
// and it's argument should be a type of boolean
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types      //This can be number or string as well.
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types with typeof
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
/*Typescript 2.0*/
//never,  it never returning anything
function neverReturns() {
    throw new Error('an error');
}
// in tsconfig.json, you can define not to be able to assign null to a value, if you are not especially define it in the begining
//     "strictNullChecks":true
// Nullable types, shouldn't be able to assing null to a type
var cantBeNull = 12;
cantBeNull = null; // Will give an error
var canAlsoBeNull; //by default it will be undefined
canAlsoBeNull = null; //null can be assigned, to undefined, it is an expection
var canBeNull = 12;
canBeNull = null;
