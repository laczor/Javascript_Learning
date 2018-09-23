// 0. By wrapping everything in an selfinvokig function and passing inside only the necessary values, we can make our code safe
// Global  = window
// $ is the jQuery object 

(function(global, $) {
 //  1. Write a function which returns a new object.  
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
// 3. Create an empty prototype object    
    Greetr.prototype = {};
 // 2.  this is our actual constructor function, with constructor default values   
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
// 4. Assign the empty ojbect to the newly created object's prototype
    Greetr.init.prototype = Greetr.prototype;
// 5. Add to the global object Greetr objec or G$    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));