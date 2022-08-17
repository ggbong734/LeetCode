/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  // spiral backtracking technique
  // create a set to mark visited cells
  // create dir array to turn right if a path is blocked
  // create a dfs function with three params, r , c and current direction
  // in dfs, mark cell as visited and clean cell
  // then for each direction, we check if the next cell we face can be cleaned
  // we start off with the current direction so no need to turn
  // if so recurse dfs and then after that go back to the current cell
  // else if cannot move to next cell, turn right using robot.turnRight

  const go_back = () => {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  };

  const visited = new Set();
  const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
  // direction  0: "up", 1: "right", 2:"down", 3:"left"

  const dfs = (r, c, d) => {
    visited.add(r + "," + c);
    robot.clean();
    for (let i = 0; i < 4; i++) {
      let newDir = (d + i) % 4;
      let newR = (r + dir[newDir][0]);
      let newC = (c + dir[newDir][1]);
      if (!visited.has(newR + "," + newC) && robot.move()) { // if next dir is not checked and is open
        dfs(newR, newC, newDir);
        go_back();
      }
      robot.turnRight(); // remember to manually turn to the right so that next move can be correct
    }
  }
  dfs(0, 0, 0);
  return;
};
