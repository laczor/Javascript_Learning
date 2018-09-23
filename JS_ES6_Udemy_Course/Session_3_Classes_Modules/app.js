 
//Lesson25 you can import other exported js files
//They will have a reference! on the exported files
// import {keyValue,test} from './external.js';
// import {} from './external.js';

// console.log(keyValue);
// test();

// Lesson 26
// import defaultExport from './external.js';
// console.log('Default',defaultExport);

import * as imported from './external.js';

console.log(imported.test());