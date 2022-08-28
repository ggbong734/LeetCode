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

  // populate starting queues with elements that have indegree of zero
  // for loop, and fill in queues with indegree zero
  // in while loop, for loop pop every element,
  // for each element, find all the neighbors in adj list,
  // subtract all indegree of neighbors
  // check if indegree is zero
  // if neigh is visited, return false/[]
  // else add neigh to visited set, and push neigh to queue.

  // need to detect cycle
  const qR = [];
  const qC = [];
  let ir = 0;
  let ic = 0;
  // need to create a strictly increasing order from [[n, indegree]] for rows and cols
  const num_inR = [];
  const num_inC = [];

  for (let [k, v] of Object.entries(inR)) {
    if (v === 0) {
      qR.push(k);
      num_inR.push([k, ir]);
      ir++;
    }
  }
  for (let [k, v] of Object.entries(inC)) {
    if (v === 0) {
      qC.push(k);
      num_inC.push([k, ic]);
      ic++;
    }
  }

  while (qR.length > 0) {
    let qRL = qR.length;
    for (let i = 0; i < qRL; i++) {
      let n = qR.shift();
      for (let neigh of adjR[n]) {
        neigh = neigh.toString();
        inR[neigh]--;
        if (inR[neigh] === 0) {
          num_inR.push([neigh, ir]);
          ir++;
          qR.push(neigh);
        }
      }
    }
  }
  if (num_inR.length < k) return [];

  while (qC.length > 0) {
    let qCL = qC.length;
    for (let i = 0; i < qCL; i++) {
      let n = qC.shift();
      for (let neigh of adjC[n]) {
        neigh = neigh.toString();
        inC[neigh]--;
        if (inC[neigh] === 0) {
          num_inC.push([neigh, ic]);
          ic++
          qC.push(neigh);
        }
      }
    }
  }
  if (num_inC.length < k) return [];

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
