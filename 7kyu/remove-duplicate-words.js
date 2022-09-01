/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
    // your perfect code...
    //Declare array to hold singular words
    let words = []
    //For each word in array
    s = s.split(' ').forEach(element => {
        //check if they are already on words array
      if(!words.includes(element)){
        //Push it if not
        words.push(element)
      }
    })
    //Return the string with only single words
    return words.join(' ')
  }