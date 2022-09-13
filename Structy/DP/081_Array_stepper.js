// array stepper
// Write a function, arrayStepper, that takes in an array of numbers as an argument. You start at the first position of the array. The function should return a boolean indicating whether or not it is possible to reach the last position of the array. When situated at some position of the array, you may take a maximum number of steps based on the number at that position.

const arrayStepper = (nums) => {
  // todo
  // time complexity is O(n * n) go to each num and try each num because worst case [7, 6, 5, 4, 3, 2, 1, 0, 0]
  // space complexity is O(n)
  return _arrayStepper(nums, 0);
};

const _arrayStepper = (nums, idx, memo = {}) => {
  if (idx >= nums.length) return true;
  if (idx in memo) return memo[idx];

  for (let i = 1; i <= nums[idx]; i++) {
    if (_arrayStepper(nums, idx + i, memo) === true) {
      memo[i] = true;
      return true;
    }
  }
  memo[idx] = false;
  return false;
}

module.exports = {
  arrayStepper,
};
