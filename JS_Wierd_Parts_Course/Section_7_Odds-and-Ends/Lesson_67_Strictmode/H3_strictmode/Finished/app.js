function logNewPerson() {
    "use strict";
    
    var person2;
    persom2 = {};				//Wrong
    console.log(persom2);
}

var person;
persom = {};					//Ok, since stric is not defined yet
console.log(persom);
logNewPerson();