const maxIncreasingSubseq = (numbers, i = 0, memo = {}, last = null) => {
  // dp approach with index and last seen as extra params
  // key for memo is last seen and index (last can default to - Infinity)
  // store last seen to check if we can increase count
  // time is O(n^2) and space is O(n^2) because we have i * previous combination of keys
  // i * previous = n * n combinations
  if (i === numbers.length) return 0;
  const key = i + "," + last;
  if (key in memo) return memo[key];
  let takeIt = 0;
  if (last === null || numbers[i] > last) {
    takeIt = 1 + maxIncreasingSubseq(numbers, i + 1, memo, numbers[i]);
  }
  let leaveIt = maxIncreasingSubseq(numbers, i + 1, memo, last);
  memo[key] = Math.max(takeIt, leaveIt);
  return memo[key];
};

module.exports = {
  maxIncreasingSubseq,
};
