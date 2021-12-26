/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    // store reference to all visited nodes in hash table
    let visited = {};
    // create helper to visit nodes
    function deepCopyWithDFS(node) {
        if (!node) return null;
        // if the node is visited, return the reference to the node in memo
        if (node.val in visited) return visited[node.val];
        let newNode = new Node(node.val);
        // store reference to new Node in hash table
        visited[node.val] = newNode;
        // visit each neighbor of current node using DFS
        for (neighbor of node.neighbors) {
            newNode.neighbors.push(deepCopyWithDFS(neighbor));
        }
        return newNode;
    }
    return deepCopyWithDFS(node);
};
