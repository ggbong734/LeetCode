// shortest path
// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.

const shortestPath = (edges, nodeA, nodeB) => {
  // create adj list
  // start bfs from nodeA
  // include distance in queue,
  // if popped node is equal to nodeB return dist OR
  // if child node is equal to nodeB return dist + 1
  // check if visited
  const adj = {}
  for (let [a, b] of edges) {
    if (!(a in adj)) adj[a] = [];
    if (!(b in adj)) adj[b] = [];
    adj[a].push(b);
    adj[b].push(a);
  }
  const q = [[nodeA, 0]]
  const visited = new Set();
  visited.add(nodeA);
  while (q.length > 0) {
    let [n, dist] = q.shift();
    for (const child of adj[n]) {
      if (child === nodeB) return dist + 1;
      if (!visited.has(child)) {
        q.push([child, dist + 1]);
        visited.add(n);
      }
    }
  }
  return -1;
};

module.exports = {
  shortestPath,
};
