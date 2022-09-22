/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = s.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = [];
    for (let j = arr[i].length - 1; j >= 0; j--) {
      temp.push(arr[i][j]);
    }
    arr[i] = temp.join('');
  }
  return arr.join(' ');
};
