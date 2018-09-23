//Creating a simple objct literal
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

//converting object literal to json
console.log(JSON.stringify(objectLiteral));
//Transfer from JSON to object literal
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);

// JSON
// {
//     "firstname": 'Mary',
//     "isAProgrammer": true
// }
