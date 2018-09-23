//You can use the built in object's and add additional properties, functions to it's .prototype property
//JS will wrap the primitives in objects and it will store the primitive value in the box.
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;   
}

