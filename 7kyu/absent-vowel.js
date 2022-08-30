/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
*/

function absentVowel(x){
    //Check condition to see is which letter is missing
    if(!x.includes('a')){
      return 0 
    } else if (!x.includes('e')){
      return 1
    } else if (!x.includes('i')){
      return 2
    } else if (!x.includes('o')){
      return 3
    } else if (!x.includes('u')){
      return 4
    }
  }