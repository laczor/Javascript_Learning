// person argument has to have the firstName propery

interface NamedPerson {
    firstName: string;
    age?: number;                  //optional argument
    [propName: string]: any;       //we will unkonw named properties, with unkonwn types
    greet(lastName: string): void; //
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//When we pass object literals, it gets checked more than the created object
// So it will see that the age is not defined in the interface.
// greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");


//We can create a class, which implements the NamedPerson interface,
// So we have to create all of the required properties, methods defined in the interface
class Person implements NamedPerson {
    firstName: string;
    lastName: string;

    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types
//Whatever uses this interface, must be a function of this defined type
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance
//interface can inherit from other interfaces
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hello!");
    }
};

console.log(oldPerson);