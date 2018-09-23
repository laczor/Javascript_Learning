//function statement
function a() {
    console.log(this);
    this.newvariable = 'hello';   //This will be "undefined"
}
//function expression
var b = function() {
    console.log(this);            //This will be "undefined"
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;                //this referring to the object, in which it is called
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;                //since we have stored the object reference with "this", we will remember the object as "this"
            this.name = newname;                //Since we are in a function expression, the global variable will be ponted with "this"
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();







