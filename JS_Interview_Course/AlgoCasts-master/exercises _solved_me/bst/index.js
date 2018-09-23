// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
	constructor(data,left=null,right=null){
		this.data = data;
		this.left = left;
		this.right = right;
	}
//Recursion looping, check the right side and return null if the node is there
// or find the last node and insert to one of it's properties
	insert(data){
		if(data === this.data){return};
		if(data> this.data){
			if(!this.right){
				this.right = new Node(data);			
			}else{
				this.right.insert(data);
			}
		}else{
			if(!this.left){
				this.left = new Node(data);			
			}else{
				this.left.insert(data);
			}
		}
	}
//Recursion loopin, where the returned answer has to be stored
//to obtain the node	
	contains(data){
 		let answer = null;
 		if(data === this.data) {
 				return this;
 		}else if(data > this.data && this.right){
				answer = this.right.contains(data);
		}else if(data> this.data){
				return null;
		}else if(data< this.data && this.left){
				answer = this.left.contains(data);
		}else if(data< this.data){
				return null;
		}
		return answer;
	}

}

const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

console.log(node.contains(3));
// console.log(node.left.left.right);

module.exports = Node;
