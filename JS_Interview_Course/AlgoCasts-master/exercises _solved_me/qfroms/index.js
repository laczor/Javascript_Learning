// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  add(record) {
    this.stackA.push(record) ;
  }

  remove() {
//Move all of the items from stackA to stackB, so the last item from stackA will be the first item for stackB,  	
	let len = this.stackA.data.length;
	while(len>0){
  		this.stackB.push(this.stackA.data[len-1]);
  		this.stackA.pop();
  		len = this.stackA.data.length;
	}
//Remove the first item from stackB
  	return this.stackB.pop();
//Switch the two stacks, to always have the data in the stackA  	
 	let temp = this.stackA;
  	this.stackA = this.stackB;
  	this.stackB = temp;
  }
  peek(){
  	return this.stackA.peek();
  }

}


module.exports = Queue;
