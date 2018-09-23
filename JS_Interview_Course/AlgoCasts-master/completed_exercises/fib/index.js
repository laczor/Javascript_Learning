// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//This whole stuff is for exporting 1 function of a memoized fibonacci
// 1. cache is created outside of inner function, so it can reach this variable any time.
// 2. function arguments from the inital fn function, has been called, by calling the fn.args properties.
// 3. we are applying the current function object with "this", to the passed fibonacci fn() function, so it will call the cache every time
// 4. This fn will return value, which will be stored in the closure cache object
function memoize(fn) {
  const cache = {};                               //Creating an empty object, for storing values
  return function(...args) {                      //Returning a nameless function, and accessing the passed function arguments.    
    if (cache[args]) {                            //Check if the info has been cache-d or not
      return cache[args];
    }

    const result = fn.apply(this, args);          //call the function, by passing the arguments of the original function called.
    cache[args] = result;

    return result;
  };
}

//It is  normal recursive fibonacci
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
//We are storing the exported namelessfunction
const fib = memoize(slowFib);

module.exports = fib;

// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }
