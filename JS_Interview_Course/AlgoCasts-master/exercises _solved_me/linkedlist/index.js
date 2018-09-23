// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// ****0**** //
class Node{
	constructor(data, next = null){
	  this.data = data;                             //Given value
	  this.next = next;                               //Property of next, which is an other  node
	}

}

class LinkedList {
// ****1***** // 
	constructor(){									//Creating a head pointer reference to a NodeOjbect, at start it is null
		this.head  = null;                             
	}
// ****2***** //	
	insertFirst(value){							    //Creating a Node object, it's value: is the parameter, next: is the previous head, and it will become the new head
		this.head  = new Node(value,this.head);
	}
// ****3***** //
	size(){											//Loop through on each node, until it find the last one in the linked list, incrementing the counter
		let counter = 0;
		let currentNode = this.head;
		while(currentNode){							//null is a falsy value
			counter++;
			currentNode = currentNode.next;
		}
		return counter;
	}
// ****5***** //	
	getFirst(){
		return this.head;
	}
// ****6***** //
	getLast(){										//Looping to the last element
		if(!this.head){ return null};				//Return null if there is no head
		let currentNode = this.head;
		while(currentNode.next){							//null is a falsy value
			currentNode = currentNode.next;
		}
		return currentNode;
	}	
// ****7***** //	
	clear(){
		this.head = null;
	}
// ****8***** //	
	removeFirst(){
		if(!this.head){ return null};				//Return null if there is no head
		this.head = this.head.next;
	}
// ****8***** //	
	removeLast(){
		if(!this.head){ return null};						//Return null if there is no head
		if(!this.head.next){ return this.head = null};		//if it contains only a header, it has to be removed
		let node = this.head;								//Node on which we are currently looping
		let previous = null;								//Previous is storing the next object reference, so we have to delete the reference, to delete the last node
		while(node.next){
			previous = node;
			node = node.next;
		}
		previous.next = null;
	}
// ****9***** //
	insertLast(value){										//Get the refernce to tha last node, and overwrite it's next property with a new Node Ojbect.
		let last = this.getLast();
		if(last){											//Check if the linkedList is not empty
			last.next = new Node(value);
		}else{
			this.head = new Node(value);
		}
	}
// ****10***** //
	getAt(integer){
		if(!this.head || integer<0){return null};			//Return null, if less than 0 or empty linkedlist

		let counter = 0;
		let currentNode = this.head;
		while(currentNode && counter!=integer){			    //Loop until it finds the integer or it runs out of nodes
			counter++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}
// ****11***** // Notice: - If the resuls is the same, no need to differentiate with if block
	removeAt(integer){
		let previousNode = null;
		if(!this.head || integer<0){return null};			//Return null, if less than 0 or empty linkedlist
		if(integer == 0){
			this.head = this.head.next;						//Will assign the next node, if it is empty, the head will be null
			return;
		}
			
		previousNode = this.getAt(integer-1);				//Get the previous node

		if(!previousNode || !previousNode.next) { return };	//If this node, or it's next is empty, will return null, for example integer out of scope
		
		previousNode.next = previousNode.next.next;			//THe  next property of current Node's previos node, will be the current node's next

	}
// ****12***** //
	insertAt(value,integer){
		if(!this.head || integer<0 || integer == 0){
			this.insertFirst(value);
			return; 
			};			//Return null, if less than 0 or empty linkedlist

		let previousNode = this.getAt(integer-1);

		if(!previousNode || !previousNode.next ){
		 this.insertLast(value);
		 return;
		};
		previousNode.next = new Node(value,previousNode.next);

	}
// ****13***** //
	forEach(fn){
		let currentNode = this.head;
		while(currentNode){
			fn(currentNode);
			currentNode = currentNode.next;
		}
	}
// ****14***** //
	*[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

let l = new LinkedList();
l.head = new Node(1);	
l.insertFirst(2);
console.log(l.size());
console.log(l);
l.insertAt('value',1);
console.log(l.size());
console.log(l);


module.exports = { Node, LinkedList };
