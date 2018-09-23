// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
// const L = require('./linkedlist');
// const LinkedList = L.LinkedList;


//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   console.log(midpoint(l)); // returns { data: 'b' }

function midpoint(list) {
//Return null if the list is empty.
	if(!list.head){return};	
	let slow = list.head;	//It is for the midpoint
	let fast = list.head;	//For advance looping
	while(fast.next && fast.next.next){	//Loop until there is item
		slow = slow.next;		//Storing the object references
		fast = fast.next.next;
	}
	return slow;				//returning the midNode
}

module.exports = midpoint;
