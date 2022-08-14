var characterReplacement = function (s, k) {
    // sliding window with two pointer
    // slide right pointer and store each char and count in hash table
    // while k (or letters we can change) is less then size of window minus maxfreq of a letter
    // shrink window by incrementing left pointer
    // remember to reduce the count of the left char before incrementing left pointer
    // update output as max of output and size of window
    let right = left = maxf = output = 0;
    let memo = {};
    while (right < s.length) {
        // increase count of right char in memo
        let char = s[right];
        memo[char] = 1 + (memo[char] || 0);
        // update char frequency
        maxf = Math.max(maxf, memo[char]);
        // Shrink the window of characters we are looking at until we can have a window of all the same characters + k charcters to change
        while (k < (right - left + 1) - maxf) {
            memo[s[left]] -= 1;
            left++;
        }

        output = Math.max(output, right - left + 1);
        right++;
    }
    return output;
};
