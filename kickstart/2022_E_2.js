// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');

// let currentline = 0;
// function readline(){
//     return input[currentline++];
// }

// let T = readline();
// for(let i = 1; i <= T; i++){
//     let N = readline().split(' ');
//     let arr = readline().split(' ');
//     console.log(`Case #${i}: ${solve(N, arr)}`);
// }

function solve(N, arr) {
  let ans = new Array(N).fill(-1);
  let copy = [...arr];
  let sorted = copy.sort((a, b) => (a - b));

  let map = {};
  for (let item of arr) {
    map[item] = null;
  }

  for (let i = 0; i < N; i++) {
    let val = sorted[i];
    map[val] = map[val] === null ? i : Math.max(i, map[val]);
  }

  for (let i = 0; i < N; i++) {
    let curr = arr[i];
    let loc = map[curr];

    //binary search
    let temp = -1;
    let l = loc + 1;
    let r = N - 1;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (sorted[m] <= curr * 2) { // if mid val less than target, move right
        temp = sorted[m];
        l = m + 1;
      } else { // mid val is more than target, can't, need to move left
        r = m - 1;
      }
    }
    ans[i] = temp;
    if (temp === -1 && loc > 0) ans[i] = sorted[loc - 1];
  }
  return ans.join(" ");
}

console.log(`Case #${1}: ${solve(5, [1000, 600, 1000, 2300, 1800])}`);
console.log(`expected: 1800, 1000, 1800, 1800, 2300`);

console.log(`Case #${2}: ${solve(2, [1000, 6000])}`);
console.log(`expected: -1, 1000`);


console.log(`Case #${3}: ${solve(5, [1000, 60, 10000, 4000, 1800])}`);
console.log(`expected: 1800, -1, 4000, 1800, 1000`);

console.log(`Case #${4}: ${solve(2, [2500, 1200])}`);
console.log(`expected: 1200, -1`);
