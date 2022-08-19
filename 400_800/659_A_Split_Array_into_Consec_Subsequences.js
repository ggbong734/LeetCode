/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  // greedy approach
  // create two maps, one to store frequency of all nums, and another to store last num in a subsequence
  // loop through each num
  // first check if there is a subsequence ending with num - 1
  // if so we want to add curr num to that subsequence
  // else we want to create a new subsequence, check if there is num + 1 and num + 2 in the frequency table. If so create new sub and update end table
  // else we can't add this num to a subsequence or create a new subsequence, return false immediately
  // time O(n) go through each num once
  // space O(n) for two maps, which store N elements each

  const freq = {};
  const last = {};

  for (let num of nums) {
    if (!freq[num]) freq[num] = 0;
    freq[num] += 1;
    if (!last[num]) last[num] = 0;
  }
  for (let num of nums) {
    if (!freq[num]) continue; // if num is used, skip
    freq[num] -= 1; // mark num as visited
    // check if we can add num to an existing subsequence
    if (last[num - 1]) {
      last[num - 1]--;
      last[num]++;
    } // we have to create a new subsequence starting with num
    else if (freq[num + 1] && freq[num + 2]) {
      freq[num + 1]--;
      freq[num + 2]--;
      last[num + 2]++;
    } else { // if can't add to existing subsequence or create new then return false;
      return false;
    }
  }
  return true;
};
