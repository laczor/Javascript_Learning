//**** Lesson 78 Set *****
// Similar Arrays
// List of values without duplication
// Unqiue values

let set = new Set([1,1,1]);

set.add(1);		//Will not be executed since 1 is already in the set
set.add(2);		//will be added.
set.delete(2);	//can be deleted.
console.log(set.has(1));	//true, it contains 1
for(el of set){
	console.log(el);
};
console.log(set);


//Lesson 78 Looping through the sets //
for(el of set.entries()){
	console.log('[key,value]',el);
};
for(val of set.values()){
	console.log('value',val);
};
for(key of set.keys()){
	console.log('key',key);
};

/***Lesson 79 WeakSet*/
// It is only storing objects.
// Unused object, will be garbage collected.
let obj1 = {a:1};
let set2 = new WeakSet([obj1,{b:2},{b:2}]);

// WeakSet is not enuremable!! No looping
//false since we are creating a new object, witj new object reference in this line
console.log(set2.has({b:2}));	
console.log(set2.has(obj1));			//True since the they are pointing to the same
set.delete(obj1);