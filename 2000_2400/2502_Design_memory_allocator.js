// https://leetcode.com/contest/weekly-contest-323/problems/design-memory-allocator/
/**
 * @param {number} n
 */
var Allocator = function (n) {
  this.arr = Array(n).fill(null);
  this.memo = {};
  this.length = n;
};

/**
* @param {number} size
* @param {number} mID
* @return {number}
*/
Allocator.prototype.allocate = function (size, mID) {
  // loop through each cell in arr, for an empty spot, check if there is enough spot, if so allocate
  // populate each cell with the mID number
  // store result in memo
  // time O(n), loop through once
  let spaces = 0;
  let spaceFound = false;
  let firstIndex;
  let prevEmpty = false;
  for (let i = 0; i < this.length; i++) {
    if (this.arr[i] === null) {
      if (!prevEmpty) {
        firstIndex = i;
        prevEmpty = true;
        spaces = 0;
      }
      spaces++;
    } else {
      prevEmpty = false;
    };
    if (spaces === size) {
      this.memo[mID] = [firstIndex, size];
      spaceFound = true;
      break;
    }
  }
  if (!spaceFound) return -1;
  for (let j = firstIndex; j < firstIndex + size; j++) {
    this.arr[j] = mID;
  }

  return firstIndex;
};

/**
* @param {number} mID
* @return {number}
*/
Allocator.prototype.free = function (mID) {
  // loop through each cell, remove all instance of mID from the cell and return the number of items that match mID.
  // time O(n)
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    if (this.arr[i] === mID) {
      total += 1;
      this.arr[i] = null;
    }
  }
  delete this.memo[mID]; // clear memo
  return total;
};

/**
* Your Allocator object will be instantiated and called as such:
* var obj = new Allocator(n)
* var param_1 = obj.allocate(size,mID)
* var param_2 = obj.free(mID)
*/
