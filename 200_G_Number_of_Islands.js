/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // if we encounter a 1, perform a dfs to check all neighboring 1
    // this method can also be used to count size of each island
    // instead of memo, we store visited in the grid, flip "1" to "0" once visited

    function dfs(r, c) {
        //base case
        if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length
            || grid[r][c] === "0")
            return 0;
        grid[r][c] = "0";
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
    }

    let numIsland = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                dfs(i, j)
                numIsland += 1;
            }
        }
    }
    return numIsland;
};
