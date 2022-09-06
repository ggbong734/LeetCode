var pruneTree = function (root) {
  // dfs
  // post order traversal
  // check right and left separately
  // return true if they contain 1
  // change right or left to null if they don't

  const dfs = (node) => {
    if (!node) return false;
    let l = dfs(node.left);
    let r = dfs(node.right);
    if (!l) node.left = null;
    if (!r) node.right = null;

    return node.val === 1 || l || r

  }
  let all = dfs(root);
  if (all === false) {
    return null
  };
  return root;


};
