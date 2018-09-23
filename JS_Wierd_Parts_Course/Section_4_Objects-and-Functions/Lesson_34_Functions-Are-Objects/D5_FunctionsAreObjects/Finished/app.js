// Function statement
function greet() {
    console.log('hi');   
}

greet.language = 'english';
console.log(greet.language);

//Function expression, the variable name, is poiting into th stored funciton object
var anonymusGreet = function(){
	console.log('hi');
};
anonymusGreet();