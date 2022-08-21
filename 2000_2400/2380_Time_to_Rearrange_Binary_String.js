/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function (s) {
  if (s.length < 2) return 0;

  const dfs = (st) => {
    let counter = 0;
    for (let i = 0; i < st.length - 1; i++) {
      if (st[i] === "0" && st[i + 1] === "1") {
        st = st.slice(0, i) + "10" + st.slice(i + 2);
        counter += 1;
        i++
      }
    }
    if (counter === 0) return 0;
    return 1 + dfs(st);
  }
  let ans = dfs(s);

  return ans;

};
