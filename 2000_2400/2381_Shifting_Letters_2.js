/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const dict = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const memo = new Array(s.length).fill(0);

  for (let shift of shifts) {
    for (let i = shift[0]; i < shift[1] + 1; i++) {
      if (shift[2] === 1) { memo[i] += 1; }
      else { memo[i] -= 1; }
    }
  }

  const changeChar = (c, id) => {
    let idx = dict.indexOf(c) - dict.indexOf("a");
    idx = idx + id;
    idx = ((idx % dict.length) + dict.length) % dict.length;
    return dict[idx];
  }

  let ansArr = [];
  for (let j = 0; j < s.length; j++) {
    ansArr.push(changeChar(s[j], memo[j]));
  }

  return ansArr.join("");

};
