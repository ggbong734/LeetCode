/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // bfs
  // edge case null arr input return []
  // time O(n) visit each node once
  // space O(n) for the queue
  if (!root) return [];
  const ans = [];
  const q = new MyQueue();
  q.push(root);
  while (q.length > 0) {
    const qLen = q.length;
    const level = [];
    for (let i = 0; i < qLen; i++) {
      const n = q.pop();
      level.push(n.val);
      for (const child of n.children) {
        q.push(child);
      }
    }
    ans.push(level);
  }
  return ans;
};

class MyQueue {
  constructor() {
    this.q = [];
    this.head = 0;
    this.length = 0;
  }

  push(item) {
    this.q.push(item);
    this.length++;
    return this.length;
  }

  pop() {
    if (this.head >= this.q.length) return "Error";
    let popped = this.q[this.head];
    this.head++;
    this.length--;
    return popped;
  }

  size() {
    return this.length;
  }

}
