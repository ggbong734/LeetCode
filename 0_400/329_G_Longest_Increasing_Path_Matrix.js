/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  // start at each cell
  // perform dfs and keep track of path length
  // use memo to  cache, memo stores r, c, path length
  // only if path length is higher than what we have we visit cell
  let rows = matrix.length;
  let cols = matrix[0].length;
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const memo = new Array(rows).fill(0).map(e => new Array(cols).fill(0));

  const dfs = (r, c, last = -1) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || matrix[r][c] <= last) return 0;
    if (memo[r][c] !== 0) return memo[r][c];

    for (let d of dirs) {
      let x = r + d[0];
      let y = c + d[1];
      memo[r][c] = Math.max(memo[r][c], 1 + dfs(x, y, matrix[r][c]));
    }
    memo[r][c] += 1;
    return memo[r][c];
  }

  let ans = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      ans = Math.max(ans, dfs(i, j));
    }
  }

  return ans;



};
