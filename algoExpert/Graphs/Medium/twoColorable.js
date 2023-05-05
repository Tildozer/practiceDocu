/*
You're given a list of edges representing a connected, unweighted, undirected graph with at least one node. 
Write a function that returns a boolean representing whether the given graph is two-colorable.
A graph is two-colorable (also called bipartite) if all of the nodes can be assigned one of two colors such that no nodes of the same color are connected by an edge.
The given list is what's called an adjacency list, and it represents a graph. 
The number of vertices in the graph is equal to the length of edges , where each index i in edges contains vertex i's siblings, in no particular order. 
Each individual edge is represented by a positive integer that denotes an index in the list that this vertex is connected to. 
Note that this graph is undirected, meaning that if a vertex appears in the edge list of another vertex, then the inverse will also be true.
Also note that this graph may contain self-loops. 
A self-loop is an edge that has the same destination and origin; 
    in other words, it's an edge that connects a vertex to itself. 
    Any self-loop should make a graph not 2-colorable.
*/

function twoColorable(edges) {
  // Write your code here.
  const colors = [];
  for (let edge of edges) colors.push(null);
  colors[0] = true;
  const stack = [0];

  while (stack.length) {
    const node = stack.pop();
    for (let connection of edges[node]) {
      if (colors[connection] === null) {
        colors[connection] = !colors[node];
        stack.push(connection);
      } else if (colors[connection] === colors[node]) {
        return false;
      }
    }
  }
  return true;
}

// ---------- Test Case 1 ----------
console.log(twoColorable([[1], [0]])); // true
// ---------- Test Case 2 ----------
console.log(twoColorable([[0]])); // false
// ---------- Test Case 3 ----------
console.log(
  twoColorable([
    [1, 2],
    [0, 2],
    [0, 1],
  ])
); // false
// ---------- Test Case 4 ----------
console.log(twoColorable([[1], [0, 2], [1]])); // true
// ---------- Test Case 5 ----------
console.log(twoColorable([[1, 2, 3], [0], [0], [0]])); // true
// ---------- Test Case 6 ----------
console.log(twoColorable([[1, 2, 3], [0, 2], [0, 1], [0]])); // false
// ---------- Test Case 7 ----------
console.log(
  twoColorable([
    [1, 2, 3],
    [0, 2, 3],
    [0, 1],
    [0, 1],
  ])
); // false
// ---------- Test Case 8 ----------
console.log(twoColorable([[2], [2, 3], [0, 1], [1]])); // true
// ---------- Test Case 9 ----------
console.log(
  twoColorable([
    [1, 2],
    [0, 2, 3],
    [0, 1, 3],
    [1, 2],
  ])
); // false
// ---------- Test Case 10 ----------
console.log(
  twoColorable([
    [1, 4],
    [0, 2, 3],
    [1, 3, 4],
    [1, 2],
    [0, 2],
  ])
); // false
// ---------- Test Case 11 ----------
console.log(twoColorable([[1, 4], [0, 2, 3], [1, 4], [1], [0, 2]])); // tru
