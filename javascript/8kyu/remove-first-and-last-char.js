/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    //You got this!
    //Pass the string to an array
    let newStr = str.split('')
    //Remove the first character from the array
    const firstChar = newStr.shift()
    //Remove the last character from the array
    const lastChar = newStr.pop()
    //return the remaining array as a string
    return newStr.join('')
  };
  
  