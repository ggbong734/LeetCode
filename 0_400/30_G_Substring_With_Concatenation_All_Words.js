/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  // store all short words in trie
  // traverse string s, at each starting point,
  // create an array to mark visited words
  // while not at end of string and
  // check if we can traverse the trie and the string at the same time
  // if the visited array is all visited, 1, then store the starting index in ans array

  let head = new Trie();
  const wordCount = {};

  for (let word of words) {
    head.insert(word);
    if (!(word in wordCount)) wordCount[word] = 0;
    wordCount[word]++;
  }
  // need a way to mark which word in words has been visited so we don't visit twice
  // use a hashmap
  const len = words[0].length;
  const ans = [];

  for (let i = 0; i < s.length; i++) {
    const visited = Object.assign({}, wordCount);
    let j = i;
    while (j < s.length) {
      let toCheck = s.slice(j, j + len);
      if (!head.search(toCheck) || visited[toCheck] <= 0) break;
      visited[toCheck] -= 1;
      j += len;
    }
    // if all values in hash table is zero, means we visited each word, push index to ans
    if (Object.values(visited).every(e => e === 0)) ans.push(i);
  }
  return ans;
};


class Trie {
  constructor() {
    this.children = {}
    this.endOfWord = false;
  }

  insert(word) {
    let curr = this;
    for (let char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new Trie();
      }
      curr = curr.children[char];
    }
    curr.endOfWord = true;
  }

  search(word) {
    let curr = this;
    for (let char of word) {
      if (char in curr.children) {
        curr = curr.children[char];
      } else {
        return false;
      }
    }
    if (curr.endOfWord) return true;
    return false;
  }
}
