/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// write the function isAnagram
var isAnagram = function(test, original) {
    //Sorted, anagram words are equal
    let word1 = test.toLowerCase().split('').sort().join('')
    let word2 = original.toLowerCase().split('').sort().join('')
    //Check if words are equal
    if(word1 === word2){
      return true
    } else {
      return false
    }
  };