/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

function capitalize(s){
    //Declare variables to hold strings
    let word1 = ''
    let word2 = ''
    //Run for loop
    for(i=0; i<s.length; i++){
        //For each character
      if(i%2 === 0){
        //Appedn to the right word the desired character
        word1 += s[i].toUpperCase()
        word2 += s[i].toLowerCase()
      } else {
        word1 += s[i].toLowerCase()
        word2 += s[i].toUpperCase()
      }
    }
    //Return the two words
    return [word1, word2];
  };