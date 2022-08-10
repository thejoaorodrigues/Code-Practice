/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

Hint for R users:

The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output

("1", "22") --> "1221"
("22", "1") --> "1221"
*/

function solution(a, b){
    // your code here
    //Check if length of b is greater than a's
    if (a.length < b.length){
        //Return the correct string
        return a.concat(b).concat(a)
    } else {
        return b.concat(a).concat(b)
    }
  }