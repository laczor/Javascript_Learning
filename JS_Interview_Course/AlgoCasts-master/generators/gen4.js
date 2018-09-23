//Creating a tree object, wich has a value and children array
class Tree {
	constructor(value = null, children = []){
		this.value = value;
		this.children = children;
	}
	// THis is a property of the Tree class, which is a generator
	//Returning the current object value first
	//Then it will yield(return) and call the child's generator property
	*printValues(){
		yield this.value;
		for(let child of this.children){
			yield* child.printValues();
		}
	}
}
//Creating a tree
// 		1
// 	  2		3
// 4			
let tree = new Tree(1,[
	new Tree(2,[new Tree(4)]),
	new Tree(3),
	]);

let arrValues = [];

for(let child of tree.printValues()){
	arrValues.push(child);
}

console.log(arrValues);			// [1,2,4,3]