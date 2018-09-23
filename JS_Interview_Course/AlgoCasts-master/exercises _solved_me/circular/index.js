// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

  const l = new List();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  l.head = a;
  a.next = b;
  b.next = c;
  c.next = b;
  console.log(circular(l)); // true

function circular(list) {

	if(!list.head){return false};		//Return false if empty
	let slow = list.getFirst();
	let fast = list.getFirst();
	while(fast.next && fast.next.next){	//loop until it finds a last el
		slow = slow.next;
		fast = fast.next.next;
		if(slow === fast){				//or until they equal.
			return true;
		}
	}
return false;
}


module.exports = circular;
