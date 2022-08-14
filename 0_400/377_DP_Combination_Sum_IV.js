/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    // using recursion and memoization
    // set up memo where we store the target at each loop
    // set up a helper function with one parameter which is the target
    // if the target is 0, return 1, if the target is less than zero, return 0
    // if the target exists in memo, return the memoized value
    // declare an answer variable initialized to 0
    // for each number in nums, add to answer the output of the recursive helper function with the remainder of the target minus num passed in as argument
    // save the answer in the memo
    // return answer which is the total of all ways to sum to target.
    // the dp bottom up approach is similar, create a dp object
    // start at the bottom dp at key 0, dp[0] = 1, if we hit remainder 0, add 1
    // loop from 1 to the target number
    // time complexity for both is O(n*m) because in the worst case for each target (possibly from 1 to target) we will have to try each num in nums.
    // at each number , dp[number] = 0, loop through each num in nums
    // dp[number] += dp.get(target - num, 0) ,if negative index, return 0
    // return dp[target] at the end
    // space complexity is O (n), need to create key for each value from 1 to target
    const memo = {};
    function helper(num) {
        if (num === 0) return 1;
        if (num < 0) return 0;
        if (num in memo) return memo[num];

        let ans = 0;
        for (n of nums) {
            ans += helper(num - n);
        }
        memo[num] = ans;

        return ans;
    }

    return helper(target);
};
