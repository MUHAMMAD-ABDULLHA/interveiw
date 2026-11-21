/**392. Is Subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input:
const s = "abc";
const t = "ahbgdc";

Output: true
Example 2:

Input:
const s = "axc";
const t = "ahbgdc";

Output: false

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters. */

// Solution
var isSubsequence = function(s,t){
    let left = 0;
    for(let right = 0; right < t.length; right++){
        if(s[left] === t[right]){
            left++;
        }
    }
    return left === s.length;
}

const s = "ahbd";
const t = "ahbgdc";
console.log(isSubsequence(s,t))