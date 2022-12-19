// https://leetcode.com/problems/find-if-path-exists-in-graph/description/

var validPath = function (n, edges, source, destination) {
  // build adj list
  const adj = {};
  for (let [start, end] of edges) {
    if (!adj[start]) adj[start] = [];
    if (!adj[end]) adj[end] = [];
    adj[start].push(end);
    adj[end].push(start);
  }
  const q = [source];
  const visited = new Set();
  while (q.length > 0) {
    let v = q.shift();
    if (v === destination) return true;
    visited.add(v);
    for (let neigh of adj[v]) {
      if (!visited.has(neigh)) q.push(neigh);
    }
  }
  return false;
};
