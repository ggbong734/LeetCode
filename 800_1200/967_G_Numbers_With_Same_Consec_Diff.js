var numsSameConsecDiff = function (n, k) {

  // bfs with help of adjacency list
  // create a hash map with all the neighbors that each digit can visit
  // add next digit with help of memo up to desired num of digits
  // then remove Repeat at the end using Set
  // time complexity, in worst case say n is low, we need to check 2 possibility for each digit
  // O(9 * 2^n-1) or O(2^n), space O(2^n) since the final ans could be this long
  const memo = {}
  for (let i = 0; i < 10; i++) {
    memo[i] = [];
    if (i + k <= 9) memo[i].push((i + k).toString());
    if (i - k >= 0) memo[i].push((i - k).toString());
  }
  const ans = [];
  for (let i = 0; i < n - 1; i++) {
    if (i === 0) {
      for (const [k, v] of Object.entries(memo)) {
        if (k > 0) v.forEach((e) => ans.push(k + e));
      }
    } else {
      const ansLen = ans.length;
      for (let j = 0; j < ansLen; j++) {
        const lastDig = ans[j][ans[j].length - 1];
        if (memo[lastDig].length > 1) ans.push(ans[j] + memo[lastDig][1]);
        ans[j] = ans[j] + memo[lastDig][0];
      }
    }
  }
  const removeRepeat = (arr) => {
    const store = new Set();
    const output = [];
    for (const n of arr) {
      if (!store.has(n)) output.push(n);
      store.add(n);
    }
    return output;
  }

  return removeRepeat(ans);
};
