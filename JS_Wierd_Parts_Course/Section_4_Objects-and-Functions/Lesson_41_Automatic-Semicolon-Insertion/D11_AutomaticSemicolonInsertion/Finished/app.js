function getPerson() {

//This doesn't work since the js engine automatically puts a semicolon here
    return 
    {
        firstname: 'Tony'
    }
//This will work, since js knows that we starte an object literal
    return {
        firstname: 'Tony'
    }
    
}

console.log(getPerson());