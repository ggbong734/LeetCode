// count paths
// Write a function, countPaths, that takes in a grid as an argument. In the grid, 'X' represents walls and 'O' represents open spaces. You may only move down or to the right and cannot pass through walls. The function should return the number of ways possible to travel from the top-left corner of the grid to the bottom-right corner.

const countPaths = (grid) => {
  // time complexity is O(r *c) can only visit each cell once
  // space O(r * c)
  const memo = Array(grid.length).fill(0).map(e => Array(grid[0].length).fill(0));
  return dfs(0, 0, grid, memo);
};

const dfs = (r, c, grid, memo) => {
  let rows = grid.length;
  let cols = grid[0].length;
  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "X") return 0;
  if (r === rows - 1 && c === cols - 1) return 1;
  if (memo[r][c]) return memo[r][c];

  memo[r][c] = dfs(r + 1, c, grid, memo) + dfs(r, c + 1, grid, memo);
  return memo[r][c];
}

module.exports = {
  countPaths,
};
