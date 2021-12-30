/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (!nums || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // return the max of ignoring last house or ignoring first house
    return Math.max(helper(nums.slice(0, nums.length - 1)),
        helper(nums.slice(1)));

    // solution for the first house robber problem
    function helper(arr) {
        if (!arr || arr.length === 0) return 0;
        if (arr.length === 1) return arr[0];

        // initialize the first two input in dp array
        // second element is the max of the first or second
        let dp = [arr[0], Math.max(arr[0], arr[1])];

        // fill out the next elements
        for (let i = 2; i < arr.length; i++) {
            // at each position, we can add current value to the max of the last last index, or we can ignore current index and pick last value.
            dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
        }
        return dp[arr.length - 1];
    }
};
