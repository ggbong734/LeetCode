/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  // greedy approach
  // add word line by line
  // while we haven't used all the words
  // push first word into a temp variable
  // then keep pushing into temp while remaining line width is <= word length + 1
  // update lineWidth with each new word added to temp
  // after we prepared all the words for the line
  // we have three conditions to check
  // 1. we reach the end of the word list, we left justify, add spaces to the right of words, Join words with a single space
  // 2. we only have 1 word on the line, we left justify, add spaces to the right
  // 3. we have more than 1 word per line, count number of spaces, then we distribute remaining lineWidth to each space. loop through spaces to assign remainder of the lineWidth. Then add each word and the assigned num of spaces next to it.
  // finally we increment line number and add answer to ans array
  // return ans array
  // time:O(n * (numSpaces)) loop through each word once, and each time we do join, repeat spaces * number of spaces. Space: O(n), need to store temp array, ans array, spaces array as we progress

  const ans = [];
  let line = 0;
  let i = 0;
  while (i < words.length) {
    // push first word into line
    let lineWidth = maxWidth - words[i].length;
    let temp = [];
    temp.push(words[i]);
    i++;

    while (i < words.length && lineWidth >= words[i].length + 1) {
      temp.push(words[i]);
      lineWidth -= (words[i].length + 1);
      i++;
    }
    lineWidth += (temp.length - 1);

    let combined = "";

    if (i === words.length) { // if final word reached, left justify
      let spacesAfter = lineWidth - (temp.length - 1);
      combined = temp.join(" ") + " ".repeat(spacesAfter);
    } else if (temp.length === 1) {  // else if only one word on this line
      combined = temp[0] + " ".repeat(lineWidth);
    } else {                       // else we have more than one word on this line
      let numSpaces = temp.length - 1; // count number of spaces between words
      let spaces = Array(numSpaces).fill(Math.floor(lineWidth / numSpaces));
      for (let j = 0; j < (lineWidth % numSpaces); j++) {   // assign remaining lineWidth to spaces
        spaces[j] += 1;
      }
      for (let x = 0; x < numSpaces; x++) {
        combined += temp[x] + " ".repeat(spaces[x]);
      }
      combined += temp[temp.length - 1];
    }

    ans[line] = combined;
    line++;
  }

  return ans;
};
