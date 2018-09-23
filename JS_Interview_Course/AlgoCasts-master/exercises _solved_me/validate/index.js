// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
	if(!node){return false};
//Will start looping on the left
//Check if the below node data is smaller, than the current node 
// and checks if it is bigger then min, or min is null --> recursion with update min,max
//else false
	if(node.left){
		max = node.data;
		if(node.left.data<max && min == null || node.left.data>min ){
			return validate(node.left,min,max);
		}else{
			return false;
		}
	}
//Doing the same thing on the right
	if(node.right){
		min = node.data;
		if(node.right.data>min && node.right.data<max || max == null){
			return validate(node.right,min,max);
		}else{
			return false;
		}
	}
//Return true nor the left or right side is false or they are empty
	return true;
}

module.exports = validate;

