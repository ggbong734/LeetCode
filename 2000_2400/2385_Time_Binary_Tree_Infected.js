/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function (root, start) {
  let adj = {}

  const dfs = (node, parent = null) => {
    if (!node) return;
    if (!adj[node.val]) adj[node.val] = [];
    if (parent !== null) adj[node.val].push(parent);
    if (node.left) adj[node.val].push(node.left.val);
    if (node.right) adj[node.val].push(node.right.val);
    dfs(node.left, node.val);
    dfs(node.right, node.val);
  }

  dfs(root);
  let min = 0;
  let visited = new Set();
  visited.add(start);
  let q = [start];
  while (q.length > 0) {
    let qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      let n = q.shift();
      for (let neigh of adj[n]) {
        if (visited.has(neigh)) continue;
        visited.add(neigh);
        q.push(neigh);
      }
    }
    min++;
  }
  return min - 1;
};
