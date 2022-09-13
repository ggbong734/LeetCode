// array stepper
// Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

const arrayStepper = (nums) => {
  // todo
  // time complexity is O(n * a) go to each num and try each num
  // space complexity is O(n)
  return _arrayStepper(nums, 0);
};

const _arrayStepper = (nums, idx, memo = {}) => {
  if (idx >= nums.length) return false;
  if (idx === nums.length - 1) return true;
  if (idx in memo) return memo[idx];
  let ans = false;
  for (let i = 1; i <= nums[idx]; i++) {
    ans = ans || _arrayStepper(nums, idx + i, memo);
  }
  memo[idx] = ans;
  return ans;
}

module.exports = {
  arrayStepper,
};
