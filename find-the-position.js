/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter){
    //Write your own Code!
    //Declare position and calculate
      let position = letter.charCodeAt(letter.toLowerCase())-96
      //Return the string
      return `Position of alphabet: ${position}`
    }