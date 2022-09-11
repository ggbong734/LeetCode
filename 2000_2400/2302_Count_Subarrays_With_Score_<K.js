var countSubarrays = function (nums, k) {
  // the observation is if we have a subarray of length n
  // then all the length of the
  // with this observation , we can add the

  const checkArr = (s, len) => {
    if (len * s >= k) return false;
    return true;
  }
  let r = 0;
  let n = nums.length;
  let ans = 0;
  let sumSoFar = 0;
  for (let l = 0; l < nums.length; l++) {
    while (r < nums.length && checkArr(sumSoFar + nums[r], r - l + 1)) {
      sumSoFar += nums[r];
      r++
    }
    ans += r - l;
    sumSoFar -= nums[l];
  }
  return ans;
};
