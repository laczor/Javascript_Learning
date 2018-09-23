var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 0. define class
var Person = /** @class */ (function () {
    //will be used to create this object,
    // public: can be access outside of the object, with defining this variable in the constructor
    function Person(name, username) {
        this.username = username;
        this.age = 27; //only TS, private + inherited classes can access it
        this.name = name;
    }
    //public method
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    //private, only accessible inside
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
// instantiate the class
var person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); // Won't work with private method
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Max";
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max");
console.log(max);
// Getters & Setters
// Control the _species property with getter + setter
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Which will be inherited and used    
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// Typescript 2.0
// Lesson 64 Private Constructors & Singletons
// Singleton, can have only 1 instance all the time, no more!
var OnlyOne = /** @class */ (function () {
    //the constructor function is private as well, so it can be access only within the object
    function OnlyOne(name) {
        this.name = name;
        this.name = name;
    }
    //this is the only exposed function, which will create an instance of itself, if there is no instance already existing
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var wrong = new OnlyOne('The Only One'); //Can't access it outside the object
var right = OnlyOne.getInstance;
//This can be accessed only, and it will create keep only 1 instance
