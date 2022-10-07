/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length < 0) return null
  let firstCharCapital = checkCharIsCapital(word[0]);
  if (word.length < 2) return true;
  let prev = checkCharIsCapital(word[1]);
  for (let i = 1; i < word.length; i++) {
    if (!firstCharCapital && checkCharIsCapital(word[i])) return false;
    if (firstCharCapital) {
      let curr = checkCharIsCapital(word[i]);
      if (prev !== curr) return false;
      prev = curr;
    }
  }
  return true;
};

const checkCharIsCapital = (char) => {
  return char === char.toUpperCase();
}
