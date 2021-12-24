var lengthOfLIS = function (nums) {
    // recursive solution (brute force)
    // this would have time complexity of O(2^n) because at each step we explore both possibilities of exclude and include
    //     let memo = {};
    //     function helper (idx, prev) {
    //         // only combination if we are at the end
    //         if (idx === nums.length) return 0;
    //         if (idx in memo) return memo[idx];
    //         // two possibilities at each index, include or exclude current number
    //         let exclude = helper(idx+1, prev);
    //         let include = 0;
    //         if (nums[idx] > prev) include = 1 + helper(idx+1, nums[idx]);
    //         // return the greater of the two
    //         memo[idx] = Math.max(exclude, include);
    //         return memo[idx];
    //     }

    //     return helper(0, Number.NEGATIVE_INFINITY);

    // DP solution starting at the last element working our way back to the front
    // Time complexity is O(n2) because at each element we check every other element ahead of it
    // watch this https://www.youtube.com/watch?v=cjWnW0hdF1Y

    // create a LIS array of the length of the nums
    let LIS = new Array(nums.length).fill(1);

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j]);
            }
        }
    }
    return Math.max(...LIS);

};
