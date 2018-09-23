// Simple Generic
// the following funciton is a kind of generic function, because this function
// can get executed in any kind of data.
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
// Better Generic <> -> this will tell typescript that we are talking about a generic
//So the function, will know which kind of data should be the end result
function betterEcho(data) {
    return data;
}
//The types will be determined by the type of the argument.
// If the types support . notation + additional properties like .length like this
// it will allow and handle it as well.
console.log(betterEcho("Max").length);
//it will recognize a number in the argument, so the type will be number
console.log(betterEcho(27));
//We can Explicitly	determine the type of the generic function		
console.log(betterEcho(27));
//error, typeMismatch, typescript will recognize that this is not the defined type
// console.log(betterEcho<number>("27"));		
console.log(betterEcho({ name: "Max", age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push('string'); //will give an error
console.log(testResults);
// Arrays,
// here we dynamically determine the array with T, and we define that we 
// are waiting for an array, of the later defined type
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
printAll([100, 200]);
// Generic Types
// const typeAssignment = value
// echo2 is the name of the constant
// T is the dynamic type, which will be the type of the argument and the result as well
// bettercho is the generic function, which will be assigned to the echo2 variable
var echo2 = betterEcho;
console.log(echo2("Something"));
// Generic Class
// extends --> we can tell, which types can be used in this generic types
//So we can are constrained to use either number or string type.
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        // + is used in order, to convert string numbers to number numbers
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
