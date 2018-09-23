// Maps and Sets are new type of collections
// Array  +  Ojbects were available until now.

/***Lesson71 Create a Map***/
//****Map****//
// - Collection Object, which maps key-value pairs

let cardAce = {
	name:"Ace of Spades",
};
let cardKing = {
	name:"King of Clubs",
};

//1.0 Creating a map object and assigning with set
let deck = new Map();
deck.set('as',cardAce);
deck.set('kc',cardKing);

//2.0 Creating a map object with automatic assigment of an array of key-value pairs
let deck2 = new Map([['as',cardAce],['kc',cardKing]]);

/***Lesson72 Managing Items***/

console.log(deck2);				//Will be a different object than the normal one
console.log(deck2.size);		//2
deck2.set('as',cardAce);		//Overwriting the existing key
console.log(deck2.get('as'));	//get your data
deck2.delete('as');				//you can delete a key with it's value completley
deck2.clear();					//All the key-value pairs are deleted

/***Lesson73 Looping over the map***/

console.log('deck.values',deck.values());
console.log('deck.keys',deck.keys());
// Get back the values
for(value of deck.values()){
	console.log('value',value);			
}
//Get back the keys
for(key of deck.keys()){
	console.log('key',key);
}
//Will get back the entry wrapped in an array
// [entry]
for(entry of deck){
	console.log('[entry]',entry);
}

/****Lesson 75 WeakMap****/


let key1 = {a:1};
let key2 = {b:2};


let weakdeck = new WeakMap();
weakdeck.set('as',cardAce);
weakdeck.set('kc',cardKing);

console.log('WeakDeck',weakdeck.get(key1));