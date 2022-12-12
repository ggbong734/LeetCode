// https://leetcode.com/contest/weekly-contest-323/problems/longest-square-streak-in-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  // sort the array
  // loop through array
  // store the square of the num as we traverse
  // if the curr num exists in the square memo, we add 1 to ans
  // finally add 1 to ans if answer is more than 1, else return -1
  // time O(n log n) because of sort

  nums = nums.sort((a, b) => a - b);
  const memo = {};
  const seen = new Set();
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) continue; // if seen before ignore, remove dups
    let lastNum = memo[nums[i]] ? memo[nums[i]] : 0; // check length of current streak
    if (memo[nums[i]]) {
      sum = Math.max(sum, memo[nums[i]] + 1);   // if num is a square of prev num, update sum
    }
    memo[nums[i] * nums[i]] = lastNum + 1;   // create new entry with lastNum + 1
    seen.add(nums[i]);
  }
  if (sum > 0) return sum;
  return -1;
};
