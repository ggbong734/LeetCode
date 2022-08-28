/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  // build adj list for each
  const inR = {};
  const inC = {};
  const adjR = {};
  const adjC = {};
  for (let i = 1; i <= k; i++) {
    adjR[i] = [];
    adjC[i] = [];
    inR[i] = 0;
    inC[i] = 0;
  }
  for (let i = 0; i < rowConditions.length; i++) {
    let [f, b] = rowConditions[i];
    adjR[f].push(b);
    inR[b]++;
  }
  for (let i = 0; i < colConditions.length; i++) {
    let [f, b] = colConditions[i];
    adjC[f].push(b);
    inC[b]++;
  }

  console.log(adjR);
  console.log(adjC);

  // need to detect cycle
  visitedR = {};
  visitedC = {};
  qR = [];
  qC = [];

  // populate starting queues with elements that have indegree of zero
  // for loop, and fill in queues with indegree zero
  // in while loop, for loop pop every element,
  // for each element, find all the neighbors in adj list, if neigh is visited, return false/[]
  // else add neigh to visited set, and push neigh to queue.

  while (qR.length > 0) {

  }

  while (qC.length > 0) {

  }

  const loc = new Array(k).fill(0);
  const num_inR = Object.entries(inR).sort((a, b) => a[1] - b[1]);   //[[num, ind]] in ascending
  const num_inC = Object.entries(inC).sort((a, b) => a[1] - b[1]);

  // need to create a strictly increasing order from [[n, indegree]] for rows and cols

  num_inR[0][1] = 0;
  num_inC[0][1] = 0;
  for (let i = 1; i < num_inR.length; i++) {
    num_inR[i][1] = num_inR[i - 1][1] + 1;
  }
  for (let i = 1; i < num_inC.length; i++) {
    num_inC[i][1] = num_inC[i - 1][1] + 1;
  }


  // combine the row and column designation for each number to the num_inR array to save space
  for (let i = 0; i < num_inR.length; i++) {
    for (let j = 0; j < num_inC.length; j++) {
      if (num_inC[j][0] === num_inR[i][0]) num_inR[i].push(num_inC[j][1]);
    }
  }

  // create an array of k by k
  // then for each num in k, we push it to the right location in matrix
  const ans = new Array(k).fill(0).map((e) => new Array(k).fill(0));
  for (let i = 0; i < num_inR.length; i++) {
    let r = num_inR[i][1];
    let c = num_inR[i][2];
    ans[r][c] = parseInt(num_inR[i][0]);
  }
  return ans;
};
