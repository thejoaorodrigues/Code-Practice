/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    // ...
    //Pass the word to a array of lower case
    word = word.toLowerCase().split('')
    //Declare output and assing to empy string
    let output = ''
    //For each word
    word.forEach((element, index, array) => {
        //If they have the amse index, 
      if(array.indexOf(element) === array.lastIndexOf(element)){
        //Raplce by a symbol
        output += '('
        //Else,
      } else {
        //Replace by another symbol
        output += ')'
      }
    })
    //Return the output
    return output
}
