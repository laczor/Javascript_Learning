// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data,children=[]){
		this.data = data;
		this.children = children;
	}
	add(value){
		this.children.push(new Node(value));
	}
	remove(data) {
	    this.children = this.children.filter(node => {			//Filter will return filtered data as an array
	      return node.data !== data;
	    });
	}
}

class Tree {

	constructor(){
		this.root = null;
	}
//Key trick, here is to store the nodes in an array, add them for each level
//Execute the passed function + remove it from the array
//While temparr not empty, loops
	traverseBF(fn){
		if(!this.root){return null;}	//If empty tree
		let nodeArr = [this.root];				

		while(nodeArr[0]){
			fn(nodeArr[0]);
			for(let i = 0; i<nodeArr[0].children.length;i++){
				nodeArr.push(nodeArr[0].children[i]);
			}
			nodeArr.shift();
		}

	}
//Trick here is to use recursion
//We are executing the passed function on the root, or on the passed node first
//Then base = if it has children, do the looping, else, return
//If a lowe call stack is returned, it will continue to the next loop	
	traverseDF(fn,node = this.root){
		if(!this.root){return null;}
		fn(node);
		if(!node.children[0]){
			return;
		}
 
		for(let i = 0; i<node.children.length;i++){
			this.traverseDF(fn,node.children[i]);
		}
	}

}

    const letters = [];
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');
    t.root.children[0].add('d2');
    t.root.children[1].add('c1');
    t.root.children[1].add('c1');
    t.root.children[0].children[0].add('d1');
    t.root.children[0].children[1].add('d21');
    t.root.children[1].children[0].add('c11');
    t.root.children[1].children[1].add('c22');

    t.traverseDF(node => {
      letters.push(node.data);
    });

    console.log(letters);


module.exports = { Tree, Node };
