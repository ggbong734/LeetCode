//2476. Closest Nodes Queries in a Binary Search Tree
// https://leetcode.com/contest/weekly-contest-320/problems/closest-nodes-queries-in-a-binary-search-tree/


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
 * @param {number[]} queries
 * @return {number[][]}
 */

// approach: destructure given BST into an array using inorder traversal
// then use binary search to find largest number before each value in query
// and the smallest number after each value as well
var closestNodes = function (root, queries) {
  const tree = [];
  inOrder(root, tree);
  const ans = [];
  for (let num of queries) {
    let min = exploreMin(tree, num);
    let max = exploreMax(tree, num);
    ans.push([min, max]);
  }
  return ans;
};

const inOrder = (node, arr) => {
  if (!node) return;
  inOrder(node.left, arr);
  arr.push(node.val);
  inOrder(node.right, arr);
  return;
}

const exploreMin = (arr, q) => {
  let l = 0;
  let r = arr.length - 1;
  let largest = Number.NEGATIVE_INFINITY;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === q) return q;
    if (arr[mid] > q) {
      r = mid - 1;
    } else {
      largest = Math.max(arr[mid], largest);
      l = mid + 1;
    }
  }
  return largest === Number.NEGATIVE_INFINITY ? -1 : largest;
}

const exploreMax = (arr, q) => {
  let l = 0;
  let r = arr.length - 1;
  let smallest = Number.POSITIVE_INFINITY;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === q) return q;
    if (arr[mid] > q) {
      smallest = Math.min(arr[mid], smallest);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return smallest === Number.POSITIVE_INFINITY ? -1 : smallest;
}
