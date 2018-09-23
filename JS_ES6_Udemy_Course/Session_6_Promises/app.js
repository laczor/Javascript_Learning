
/*Promise is an Object, which is created with a constructor function
its has two parameters
resolve function
reject function
*/
/*When we resolve our promise and provide back data
it will be visible in the then() function*/
let promise = new Promise(function(resolve,reject){
			setTimeout(()=>{
				// resolve("Done");
				reject("failed");
			},1500);
});

promise.then((value)=>{
	console.log('Finished',value);
},(error)=>{
	console.log('Normal Rejected',error);
});

// Promise Object - Resolve - Then (value(),error()) - custom function()
// "Done"
// Promise Object - Reject -  Then (value(),error()) - custom function()
// "Failed"

/*Lesson 56 Chain Promises*/

function waitASecond(seconds){
	return new Promise (function(resolve,reject){
		setTimeout(()=>{
			seconds++;
			resolve(seconds);
		},1000)
	});
}

waitASecond(0)
		.then(waitASecond)		//This function, will take the seconds as arguments
		.then((seconds)=>{		//Just like here;
			console.log('Calculated Resolve',seconds);
		}
);


/*Lesson 57 Chatch Errors*/

function waitASecondCatch(seconds){
	return new Promise (function(resolve,reject){
		
		if(seconds>2){
			reject("Rejected");
		}else{	
			setTimeout(()=>{
				seconds++;
				resolve(seconds);
			},1000);
		}
	});
}

waitASecondCatch(3)
		.then(waitASecondCatch)		//This function, will take the seconds as arguments
		.then((seconds)=>{		//Just like here;
			console.log('Resolved Conditionally',seconds);
		}).catch((error)=>{
			console.log('Rejected Conditionally',error);
		}
);


/***Lesson 58 All + Race**/
// It will only resolve, if every promise in the array is resolved.
// ****ALL****, all promises has to finish!
let promise1 = new Promise(function(resolve,reject){
			setTimeout(()=>{
				resolve("Resolved");
			},1000);
});

let promise2 = new Promise(function(resolve,reject){
			setTimeout(()=>{
				reject("Rejected");
			},200);
});

Promise.all([promise1,promise2])
	.then((success)=>{
		console.log('All Promise',success);
	})
	.catch((error)=>{
		console.log('All Promise',error);
	});

// **RACE*** will wait for the fastest promise to resolve.
Promise.race([promise1,promise2])
	.then((success)=>{
		console.log('All Promise',success);
	})
	.catch((error)=>{
		console.log('All Promise',error);
	});