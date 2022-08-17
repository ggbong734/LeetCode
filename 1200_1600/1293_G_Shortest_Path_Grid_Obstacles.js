/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (grid, k) {
  // bfs
  // for each keep track of number of steps and k
  //
  // at each step, check if we have reached the bottom right point and if the k number is acceptable, if so, exit
  // if no solution, return -1
  // memoize with [r, c, k] if we seen this state, skip
  // O(n)
  // edge cases, origin is blocked

  const rows = grid.length;
  const cols = grid[0].length;

  const q = [[0, 0, k]];

  let steps = 0;
  let visited = {};
  while (q.length > 0) {
    let qLen = q.length;
    for (let i = 0; i < qLen; i++) {
      let [r, c, kp] = q.shift();
      kp = grid[r][c] === 1 ? kp - 1 : kp;
      if (kp < 0) continue;
      visited[r + "," + c + "," + kp] = true;
      // if cell is end point, exit
      if (r === rows - 1 && c === cols - 1) return steps;
      const dir = [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]];
      for (let d of dir) {
        if (d[0] < 0 || d[1] < 0 || d[0] >= rows || d[1] >= cols) continue;
        if (d[0] + "," + d[1] + "," + kp in visited) continue;
        q.push([d[0], d[1], kp]);
      }
    }
    steps += 1;

  }

  return -1;
};
