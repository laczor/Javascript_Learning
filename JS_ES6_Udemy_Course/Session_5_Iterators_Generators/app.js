



// MODIFY THE NPM START ACCORDINGLY






// Iterator is an ojbect, which knows how to access the values of the collection
let arr = [1,2,3];

//It will be a function,
console.log(typeof arr[Symbol.iterator]);

let it = arr[Symbol.iterator]();

//The Symbol iterator Object, has a function, which will return the next Iterator Object
console.log(it.next());		//value --> 1
console.log(it.next());		//value --> 2
console.log(it.next());		//value --> 3
console.log(it.next());		//value --> nan


/*Lesson 47 Iterators In Action*/
//So we can actually overWrite the built in iterator function of the array Object,
//And we are returning completly different custom values
let array = [1,2,3];

array[Symbol.iterator] = function(){
let nextValue = 10;
	return {
		next: function(){
			 nextValue++;
			 return {
			 	done: nextValue >15 ?true:false,
			 	value: nextValue,
			 }
		}
	};
};

for(let el of array){
	console.log(el);
}

/*Lesson48  Custom Iterable Object*/
// With using custom iteration, we can determine, how and what properties should be shown
let person = {
	name: "Steve",
	hobbies: ['Sports', 'Cooking'],
	[Symbol.iterator]: function(){
		let i = 0;					//To count the loopings
		let hobbies = this.hobbies;	//To pass the Hobbies array
		return {
			next:function(){
				let value = hobbies[i];		//reference current hobbies array
				i++;
				return{
					done: i>hobbies.length?true:false ,		//condition for our iteration
					value: value,
				};
			},
		};
	},
}
//We can loop through our person object,
for(let hobby of person){
	console.log('Hobby',hobby);
}