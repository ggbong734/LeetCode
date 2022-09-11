// min change
// Write a function minChange that takes in an amount and an array of coins. The function should return the minimum number of coins required to create the amount. You may use each coin as many times as necessary.

// If it is not possible to create the amount, then return -1.


const minChange = (amount, coins) => {
  // time complexity: O(n * a) where n is amount and a is num of coins
  // we can only visit each amount once, and each time we subtract with every coin
  // space complexity O(n) max call stack is the amount, if coin is 1
  const helper = (amount, memo = {}) => {
    if (amount === 0) return 0;
    if (amount in memo) return memo[amount];
    let ans = Infinity
    for (let coin of coins) {
      if (amount - coin >= 0) {
        ans = Math.min(ans, 1 + helper(amount - coin, memo))
      }
    }
    memo[amount] = ans;
    return ans;
  }
  const a = helper(amount);
  return a === Infinity ? -1 : a;

};

module.exports = {
  minChange,
};
