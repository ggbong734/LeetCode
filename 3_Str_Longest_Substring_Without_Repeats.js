var lengthOfLongestSubstring = function(s) {
    // sliding window technique with hash set to check for repeats
    // slide right pointer until a repeat is observed
    // slide left pointer until no more repeat (hash of right letter in memo is 0)
    // then update res and loop again until right hits the end of string
    let memo = {};
    let right = 0;
    let left = 0;
    let res = 0;

    while (right < s.length) {
        if (memo.hasOwnProperty(s[right])) {
            memo[s[right]] += 1;
            // move pointer until the repeat is removed
            while (memo[s[right]] > 1) {
                memo[s[left]] -= 1;
                left++;
            }
        } else {
            memo[s[right]] = 1;
        }
        //update res
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
};
