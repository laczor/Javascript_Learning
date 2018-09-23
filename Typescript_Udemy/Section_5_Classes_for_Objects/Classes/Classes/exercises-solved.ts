// // Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
 
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
 
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }

class CarClass{
    constructor(public name:string, public acceleration:number = 0){
        this.name = name;
    }
    honk(){
        console.log("Toooooooooot!");
    }
    accelerate(speed:number){
        this.acceleration +=speed;
    }
};

var car = new CarClass("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
 
class baseObjectClass {
    constructor(public width:number=0,public length:number=0){
        this.width = width;
        this.length = length;
    }
}

class rectangle extends baseObjectClass{
//Not needed!
    constructor(public width:number=0,public length:number=0){
        super(width, length);
    }
    calcSize(){
        return this.width*this.length;
    }
}

let rectangleObject = new rectangle(5,2);
console.log(rectangleObject.calcSize());





// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);