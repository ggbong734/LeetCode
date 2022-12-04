/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  // build network of cities in the network of 1 and n
  // use bfs to build
  // build adjacency list
  // time complexity O(E)
  const adj = {};
  for (let road of roads) {
    let start = road[0];
    let end = road[1];
    if (!adj[start]) adj[start] = [];
    adj[start].push(end);
    if (!adj[end]) adj[end] = [];
    adj[end].push(start);
  }
  console.log(adj);
  const q = [1];
  const visited = new Set();
  // perform bfs
  while (q.length > 0) {
    let curr = q.shift();
    for (let neigh of adj[curr]) {
      if (!visited.has(neigh)) {
        visited.add(neigh);
        q.push(neigh);
      }
    }
  }
  let minPath = Infinity;
  for (let road of roads) {
    let [start, end, dist] = road;
    if (visited.has(start) && visited.has(end)) minPath = Math.min(minPath, dist);
  }
  return minPath;
};
