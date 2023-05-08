/*
You're given three inputs, all of which are instances of an AncestralTree class that have an ancestor property pointing to their youngest ancestor. 
The first input is the top ancestor in an ancestral tree (i.e., the only instance that has no ancestor--its ancestor property points to None / null), and the other two inputs are descendants in the ancestral tree.
Write a function that returns the youngest common ancestor to the two descendants.
Note that a descendant is considered its own ancestor. 
So in the simple ancestral tree below, the youngest common ancestor to nodes A and B is node A.
*/

// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  const depthOne = _getDepth(descendantOne, topAncestor);
  const depthTwo = _getDepth(descendantTwo, topAncestor);

  if (depthOne > depthTwo) {
    return _backTrack(descendantOne, descendantTwo, depthOne - depthTwo);
  } else {
    return _backTrack(descendantTwo, descendantOne, depthTwo - depthOne);
  }
}

function _getDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth += 1;
    descendant = descendant.ancestor;
  }
  return depth;
}

function _backTrack(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff += -1;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}
