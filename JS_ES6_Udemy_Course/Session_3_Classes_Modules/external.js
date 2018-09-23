// Lesson25
//1. Exporting 1 by 1. 
 // export let keyValue = 1000;
 // export let test = function(){
 // 	console.log('test');
 // };

//1.1 Exporting together
 let keyValue = 1000;
 let test = function(){
 	console.log('test');
 };


 let defaultExport = "Default text";
export {keyValue,test};

// Lesson26 - default export
export default defaultExport;