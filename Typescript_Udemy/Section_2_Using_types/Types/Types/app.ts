//Javascript has dynamic types, typescript has static types
// You define types once and use it.
// string
let myName: string = 'Max';
// myName = 28;

// number, no differentiantion between integer, float
let myAge: number = 27;
// myAge = 'Max';

// boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;  --> will fail!

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array, (array of any type of element)
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 100;

// tuples  //(mixed types)
let address: [string, number] = ["Superstreet", 99];

// enum    //Make numbers, more expressive, an object with properties
enum Color {
    Gray, // 0
    Green = 100, // 100
    Blue = 2// 2
}
let myColor: Color = Color.Blue;
console.log(myColor);

// any    //You can assign Any kind of types, no compilation check
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3};
console.log(car);

// functions, should return a string
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void         //Will not return anything
function sayHello(): void {
    console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(10, 2));

// function types
// We define a ES6 funcion to be an actual type as wel
let myMultiply: (a: number, b: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects    //We can define, how an object should look like
let userData: { name: string, age: number } = {
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
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};
// complex = {};  //this would not satisfy our complex type

// type alias      //adding a name to our type as an alias so we can reference it

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types      //This can be number or string as well.
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types with typeof
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}

/*Typescript 2.0*/

//never,  it never returning anything

function neverReturns():never{
    throw new Error('an error');
}

// in tsconfig.json, you can define not to be able to assign null to a value, if you are not especially define it in the begining
//     "strictNullChecks":true

// Nullable types, shouldn't be able to assing null to a type
let cantBeNull:number = 12;
cantBeNull = null;           // Will give an error
let canAlsoBeNull;          //by default it will be undefined
canAlsoBeNull = null;       //null can be assigned, to undefined, it is an expection

let canBeNull : number | null = 12;
canBeNull = null;





