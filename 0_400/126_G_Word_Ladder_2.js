/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  // create an adjancecy list of word with wildcards to words
  // do bfs starting with beginWord,
  // store path taken in the bfs queue, last node in last element of path
  // for each item in queue, shift from front of queue
  // then take the last element, loop through each char and generate all possible wildcards
  // then check the adj list if there are neighbors for each wild card
  // if so, we generate a temporary array a copy of the path so far
  // then push the found element into path
  // then push updated path into queue
  // if the word found is the endWord, push path into ans array as well
  // at the end of each bfs round, check if ans array is occupied, if so break while loop
  // return ans at the end

  if (!wordList.includes(beginWord)) wordList.push(beginWord);

  const compareWords = (word1, word2) => {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) diff += 1;
    }
    return diff === 1;
  };

  // create adj list of wildcard "h*t": ["hot", "hit"]
  // O(wordlist.length^2 * 5)
  const adj = {};
  for (let word of wordList) {
    adj[word] = [];
    for (let comparison of wordList) {
      if (compareWords(word, comparison)) {
        adj[word].push(comparison);
      }
    }
  }

  const dist = {};
  dist[beginWord] = 0;

  // bfs
  const ans = [];
  const q = new MyQueue();
  let stopBFS = false;
  q.push(beginWord);
  while (q.size() > 0) {
    let qLength = q.size();
    for (let j = 0; j < qLength; j++) {
      let word = q.pop();
      for (let neigh of adj[word]) {
        if (!(neigh in dist)) {
          dist[neigh] = dist[word] + 1;
          q.push(neigh);
          if (neigh === endWord) stopBFS = true;
        }
      }
    }
    if (stopBFS) break;
  }
  // console.log(dist);
  // dict dfs
  const dfs = (word, path) => {
    if (word === endWord) {
      ans.push([...path]);
    }
    for (let neigh of adj[word]) {
      if (neigh in dist && dist[neigh] === dist[word] + 1) {
        path.push(neigh);
        dfs(neigh, path);
        path.pop();
      }
    }
  };

  dfs(beginWord, [beginWord]);

  return ans;
};

class MyQueue {
  constructor() {
    this.list = [];
    this.head = 0;
  }

  push(word) {
    this.list.push(word);
  }

  pop() {
    if (this.head >= this.list.length) return "error";
    const temp = this.list[this.head];
    this.head++;
    return temp;
  }
  size() {
    return this.list.length - this.head;
  }
}
