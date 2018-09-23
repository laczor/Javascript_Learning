// 0. define class
class Person {
    name: string;               //object property
    private type: string;       //only typescript, only accessible within this object
    protected age: number = 27; //only TS, private + inherited classes can access it
//will be used to create this object,
// public: can be access outside of the object, with defining this variable in the constructor
    constructor(name: string, public username: string) {
        this.name = name;
    }
//public method
    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }
//private, only accessible inside
    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}
// instantiate the class
const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method

// Inheritance
class Max extends Person {
    // name = "Max";

    constructor(username: string) {
        super("Max", username);
        this.age = 31;
    }
}
const max = new Max("max");
console.log(max);

// Getters & Setters
// Control the _species property with getter + setter
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;
//abstact method, as well
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
//Which will be inherited and used    
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Typescript 2.0
// Lesson 64 Private Constructors & Singletons

// Singleton, can have only 1 instance all the time, no more!
class OnlyOne{
// SO the class's instance property is private, it can be accessible only within the class
// and it is static as well, so you do not need an instance to use it
    private static instance:OnlyOne;
//readonly properties
    public readonly name:string;    
//the constructor function is private as well, so it can be access only within the object
    private constructor(public name:string){
        this.name = name;
    }
//this is the only exposed function, which will create an instance of itself, if there is no instance already existing
    static getInstance(){
        if(!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne('The Only One');
        }
    return OnlyOne.instance;
    }
}

let wrong = new OnlyOne('The Only One'); //Can't access it outside the object
let right = OnlyOne.getInstance;         
//This can be accessed only, and it will create keep only 1 instance