// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];
//Run until every item is remove expect 's'
  while (arr.length > 1) {
    const node = arr.shift();
//if indicator reached, check for other element and create a new array with 0
    if (node === 's') {
      counters.push(0);
      arr.push('s');
//if not indicator, spread the elements in the array and increment the counter    
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
