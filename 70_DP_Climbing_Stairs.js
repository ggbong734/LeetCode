/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // create memo
    let memo = {}
    // create helper function
    // if steps less than 0, means we overstep, return 0
    // if steps exactly 0, we found a way, return 1
    // if no memo yet, save answer to the memo at key steps
    // answer is the sum of helper(steps -1) and helper(steps -2);
    // return memo[steps]
    function helper(steps) {
        if (steps < 0) return 0;
        if (steps === 0) return 1;
        if (!memo[steps]) memo[steps] = helper(steps - 1) + helper(steps - 2);
        return memo[steps];
    }
    return helper(n);
};
