// non adjacent sum
// Write a function, nonAdjacentSum, that takes in an array of numbers as an argument. The function should return the maximum sum of non-adjacent elements in the array. There is no limit on how many elements can be taken into the sum as long as they are not adjacent.

const nonAdjacentSum = (nums) => {
  // take it or leave it approach
  // if take, go to next next
  // if leave, go to next
  // time: O(n) visit each num once
  // space: O(n) to store memo and call stack
  return helper(nums, 0);
};

const helper = (nums, i, memo = {}) => {
  if (i >= nums.length) return 0;
  if (i in memo) return memo[i];
  memo[i] = Math.max(nums[i] + helper(nums, i + 2, memo), helper(nums, i + 1, memo));
  return memo[i];
}

module.exports = {
  nonAdjacentSum,
};
