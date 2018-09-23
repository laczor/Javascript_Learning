
//Functonal Programming, we are segmeting our code in a clean way, relying on these first-class functions
//We put work into functions.
//It will take an array, it will loop through the array, and it will execute the passed function on the current loop
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2;         //will return a boolean.
});
console.log(arr3);

//an easy limier function
var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
//We are passing the "checkPastLimit()" function as a functional argument
// We are using bind in order to make a copy of the above function, "this" will refer to anything, doesn't matter
// 1 will refer to the limiter, and when it will be caled in the mapForEach, the item will be the current loop
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

//We are wrapping the function in a limiter function
//presetting to the created function the limiter with bind
//and the result will be a returned function which can be inserted into the mapForEach function argument
var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);


// underscore, imported third party library.
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);































