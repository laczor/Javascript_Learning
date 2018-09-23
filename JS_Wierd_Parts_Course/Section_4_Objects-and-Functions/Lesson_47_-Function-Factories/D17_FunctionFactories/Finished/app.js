
// Event after the  makeGreeting function execution context is finished, i can still access to the "language" variable
//So we can simply create functions, which determines the language at once, and when we need it we just have to call them with the addintional info, 
function makeGreeting(language) {
 
    return function(firstname, lastname) {
     
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
        
    }
    
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');




/*Prevoies Function OVerloading function, where we created create 1 function, whith all of the parameters*/
//Shared functions, instead of overloading them
// function greet(firstname, lastname, language) {
        
//     language = language || 'en';
    
//     if (language === 'en') {
//         console.log('Hello ' + firstname + ' ' + lastname);   
//     }
    
//     if (language === 'es') {
//         console.log('Hola ' + firstname + ' ' + lastname);   
//     }
    
// }

// function greetEnglish(firstname, lastname) {
//     greet(firstname, lastname, 'en');   
// }

// function greetSpanish(firstname, lastname) {
//     greet(firstname, lastname, 'es');   
// }

// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe');