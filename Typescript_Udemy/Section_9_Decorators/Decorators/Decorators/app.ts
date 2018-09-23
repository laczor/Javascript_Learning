// This is the created decorator, which will be attached to the class
// By default, these function gets 1 argument, the constructor function of the attached class
// Typscript feature not ES6!!
// So this decorator, will simply console log the class's constructor function to which it has been added
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("Hi!");
    }
}

// Factory
// You can overwrite the argument list according to your preference
// it will determine based on the input, to return the previously written
// logged function, which will be added to the Car class, or return null
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced
// You can attach new functions to the prototpye of the classes, which are decorated
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(false)
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
// This is the proper way to call those functions which added to the prototype
// with the decorator
(<any>plant).print();

// Method Decorator
// will help us modify methods
// target: targeted method
// propName: the property name
// descriptor:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
// it is basically a description of the property if it should be configurable, enumerable etc.
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

// Property Decorator
// We are returning the new descriptor of the property
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project);

// Parameter Decorator
// we can access the paremeters and execute some code on it.
// target: the paremeters
// methodName: the name of the method, in which we are added the decorator
// paramIndex: parameter index
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);