// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examplesű
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

   const list = new List();
   list.insertLast('a');
   list.insertLast('b');
   list.insertLast('c');
   list.insertLast('d');
   console.log(fromLast(list, 2).data); // 'b'

function fromLast(list, n) {
	if(!list.head){return}
	let slow = list.head;
	let fast = list.head;
	for(let i = 0; i<n;i++){	//moving away n step
		fast = fast.next;
	}

	while(fast.next){	//Since we are moving 1 step
		slow = slow.next;
		fast = fast.next;
	}
	return slow;

}


module.exports = fromLast;
