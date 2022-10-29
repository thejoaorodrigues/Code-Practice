/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)
should return:

'A'
For ASCII table, you can refer to http://www.asciitable.com/
*/

function getChar(c){
  // ...
  //Declare variable to hold the car code 
  let char = String.fromCharCode(c);
  //Return the char
  return char
}