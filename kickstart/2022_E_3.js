// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// let currentline = 0;
// function readline() {
//   return input[currentline++];
// }

// let T = readline();
// for (let i = 1; i <= T; i++) {
//   let N = readline(); // don't use split if array
//   let P = readline(); // if array use .split(' ');
//   console.log(`Case #${i}: ${solve(N, P)}`);
// }

function solve(N, P) {
  //try everysubstring
  function isPalindrome(s) {
    let L = s.length;
    let m = L % 2 === 0 ? L / 2 : Math.floor(L / 2);
    for (let i = 0; i < L / 2; i++) {
      if (s[i] !== s[L - i - 1]) return false;
    }
    return true;
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < N - i + 1; i++) {
      let ans = P.slice(j, i + j);
      if (isPalindrome(P + P.slice(j, i + j))) return ans;
    }
  }
  return -1;
}

console.log(`Case #${1}: ${solve(4, "abba")}`);
console.log(`expected: abba`);

console.log(`Case #${2}: ${solve(6, "cdccdc")}`);
console.log(`expected: cdc`);

console.log(`Case #${3}: ${solve(5, "aaaab")}`);
console.log(`expected: aaaa`);

console.log(`Case #${4}: ${solve(4, "cccc")}`);
console.log(`expected: c`);
