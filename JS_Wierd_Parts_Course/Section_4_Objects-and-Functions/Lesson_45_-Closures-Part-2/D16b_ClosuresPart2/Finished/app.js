
// Making an array to have a collection of functions
//When the function is returned, we are storing the variable of i= 3 and the functions pushed to the array
function buildFunctions() {
 
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);   
            }
        )
    }
    return arr;
}
//Store the array in the memory and call the functions
var fs = buildFunctions();
//Here the functions are invoked
fs[0]();            //3               
fs[1]();            //3
fs[2]();            //3

//with ES6, local enviromental variable, using the "let" keyword
//with this we are assigning the value of the i variable to a different variable, for a different scope, stored seperately in the memory
//thus a different j will be stored for the functions in the array
// function buildFunctions2() {
//     var arr = [];
//     for (var i = 0; i < 3; i++) {
//         let j = i;                      
//         arr.push(
//             function() {
//                   console.log(j);   
//             }
//         )
//     }
//     return arr;
// }

//In order to create a seperately executable context, to create different scopes for the variable
//we use immediately invokable function, which has it's own excetuinal context, with different stored variables
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++)  {
        let j = i;                      //with ES6, local enviromental variable
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();