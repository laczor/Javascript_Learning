// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// *****Recursive Fibonacci
// Trick
// So, we are calling the same recursive fibonacci, but instead of calling the stack everytime, we store the calculated values
// Then we are passing this calculated array, to the newly called function

function fib(n, array=[]) {
	let fibArr = array;									//Array of the calculated fibonacci numbers
	if(array[n]!=undefined){							//Check if it can find them in the stored array.
		return array[n];
	}

	if(n<2){											//Base case for our recursion
	  return 1;
	}
//Due to a call stack, first we have to let know the lowe call stack of the status of the fibarray. 
//then  when we are climbing up the tree, returning the accumulated value from the base we can strore it in fibarray
// which will be merged with the upper stack fibArray, like it will inherit it.

	fibArr[n] = fib(n-1,fibArr) + fib(n-2,fibArr);	//We store it in the calculated fibonacci array, and returning the result of the calculated amount.
    return fibArr[n];
}
fib(10);
module.exports = fib;


// *****Iterative Finonacci **** ///
// ***Trick:****
// You have to store the calculated values somewhere, in an array.


// function fib(n) {
// 	let fibarr = [1,1];		
// 	for(i=2;i<n;i++){
// 		fibarr[i] = fibarr[i-1] + fibarr[i-2];
// 	}
// 	console.log( fibarr);
// 	console.log( fibarr[n-1] );
// }
// fib(4);

// *****Recursive Fibonacci

// function fib(n) {

// 	if(n==1 || n==2){
// 	  return 1;
// 	}
// 	return fib(n-1) + fib(n-2);

// }
// console.log(fib(4));