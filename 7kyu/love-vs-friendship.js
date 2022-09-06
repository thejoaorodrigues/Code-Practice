/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string){
    //your code here
    //Declare value to 0
    let value = 0
    //Pass string to array
    string = string.split('')
    //And for each letter of array
    string.forEach(element => {
        //Sum the charcode - 96
      value += element.charCodeAt(0)-96
    })
    //Return the final value
    return value
  }