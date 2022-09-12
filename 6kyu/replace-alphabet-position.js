/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
    //Declare output variable to hold the string
    let output = ''
    //Pass the whole string to lowercase, an into an array of words
    text = text.toLowerCase().split(' ')
    //For each word
    for(i=0; i<text.length; i++){
        //Split the word into letters and
      text[i].split('').forEach((letter, index) => {
        //If the digit is different from the upper case variable (to exclude symbols)
        if(letter !== letter.toUpperCase()){
            //Pass the char code of the said element
            output += ` ${letter.charCodeAt(0)-96}`
        }
      })
      
    }
    //To eliminate spaces on the end of the string, trim the string and return it
    return output.trim()
  }