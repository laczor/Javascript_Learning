
// 1. sayHiLater function finishes running, the variable of greeting is still in the memorypace, in the execution context
// 2. then it will execute the setTimeout function, after 3 seconds, then it will check if any functions is listening to it's executions
// 3. Callback is a function executed when other function is finished.

function sayHiLater() {
    var greeting = 'Hi!';
 //This is taking a function object as a parameter   
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}
sayHiLater();

// jQuery uses function expressions and first-class functions, which can be passed around as arguments
//$("button").click(function() {
//    
//});

//you can functions dynamically.
function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work
    callback(); // the 'callback', it runs the function I give it!
    
}

tellMeWhenDone(function() {
    console.log('I am done!');
    
});

tellMeWhenDone(function() {
    console.log('All done...');
    
});





