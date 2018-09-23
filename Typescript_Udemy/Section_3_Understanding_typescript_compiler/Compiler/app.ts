let myName: string = "Max";
let myAge: number = 27;
let anything;
anything = 12;

// myName = 30;

// TypeScript 2.0

// Check if the variable is being used or not
//here if strictNullChecks = true,
//we will get an error, since if isTrue=false;
// result variable of type number will not be used, prior returning it
function controlMe(istrue:boolean){
		let result:number;
		if(istrue){
			result=12;
		}
		return result;
}