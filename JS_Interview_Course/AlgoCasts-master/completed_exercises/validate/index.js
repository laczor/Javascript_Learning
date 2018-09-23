// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

//1.Test the first cases, if it is bigger or smaller then the criterias
//2.If there is a node function + it is returning false   !false = true 
function validate(node, min = null, max = null) {
/**1**/  
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }
// !validate(node.left, min, node.data)-> will return true or false
// !false = true
// So if there is a node left, and the recursed function results in false
// there is a mistake in the binary tree
/**2**/
  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
//if no error has been found, than it will return true
  return true;
}

module.exports = validate;
