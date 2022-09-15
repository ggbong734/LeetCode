const islandCount = (grid) => {
  // loop through each cell
  // if cell is L, dfs and add 1 to ans
  // mark visited cell by turning L to W
  // time O(r*c) and space O(r*c)
  const rows = grid.length;
  const cols = grid[0].length;
  let ans = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        dfs(grid, i, j);
        ans++;
      }
    }
  }
  return ans;
};

const dfs = (grid, r, c) => {
  const rows = grid.length;
  const cols = grid[0].length;
  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "W")
    return;
  grid[r][c] = "W";
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
  return;
}

module.exports = {
  islandCount,
};
