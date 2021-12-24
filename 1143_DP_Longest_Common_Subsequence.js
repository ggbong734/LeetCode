/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    // naive recursive solution with a pointer on each text, start at the end
    // set up memo, with array of the indices as key
    // three cases: case 1, char at the indices are the same, add 1 and move both pointer by 1
    // else, case 2 and case 3, move one pointer down
    let memo = {};
    function helper(i, j) {
        if (i >= text1.length || j >= text2.length) return 0;
        let key = JSON.stringify([i, j]);
        if (key in memo) return memo[key];

        if (text1[i] === text2[j]) {
            memo[key] = 1 + helper(i + 1, j + 1);
        } else {
            memo[key] = Math.max(helper(i, j + 1), helper(i + 1, j));
        }
        return memo[key];
    }
    return helper(0, 0);

    // if (text1.length === 0 || text2.length === 0) return 0;
    // let key = text1+text2;
    // if (key in memo) return memo[key];
    // console.log(memo);
    // if (text1[0] === text2[0]) {
    //     memo[key] = 1 + longestCommonSubsequence(text1.slice(1), text2.slice(1), memo)
    // } else {
    //     // case 1 skip 2
    //     // case 2 skip 1
    //     memo[key] = Math.max(longestCommonSubsequence(text1, text2.slice(1), memo),
    //                          longestCommonSubsequence(text1.slice(1), text2, memo));
    // }
    // return memo[key];
};
