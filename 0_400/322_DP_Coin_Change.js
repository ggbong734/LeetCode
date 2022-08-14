/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let memo = {}

    function helper(amount) {
        if (amount in memo) return memo[amount];
        if (amount === 0) return 0;

        let ans = Number.POSITIVE_INFINITY;
        for (let coin of coins) {
            if (coin <= amount) {
                let comb = 1 + helper(amount - coin);
                ans = Math.min(ans, comb);
            }
        }

        memo[amount] = ans;
        return memo[amount];
    }
    value = helper(amount, 0);
    return value === Number.POSITIVE_INFINITY ? -1 : value;
};
