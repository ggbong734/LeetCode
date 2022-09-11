const maxPathSum = (grid) => {
  // time complexity O(r*c)
  // space O(r*c)
  return helper(0, 0, grid);
};

const helper = (r, c, grid, memo = {}) => {
  let pos = r + "," + c;
  if (pos in memo) return memo[pos];
  let rows = grid.length;
  let cols = grid[0].length;
  if (r >= rows || c >= cols) return -Infinity;
  if (r === rows - 1 && c === cols - 1) return grid[r][c];
  memo[pos] = grid[r][c] +
    Math.max(helper(r + 1, c, grid, memo), helper(r, c + 1, grid, memo));
  return memo[pos];
}

module.exports = {
  maxPathSum,
};
