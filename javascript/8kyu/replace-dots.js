/*
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.
*/

var replaceDots = function(str) {
    //Declare variable to hold the new string
    let result = ""
    //Initialize for loop at 0
    for(i=0; i<str.length; i++){
        //If i equals a dot
        if(str[i] === '.'){
            //Append to result a dash
            result += '-'
        //Else
        } else {
            //Append the element
            result += str[i]
        }
    }
    //Return result
    return result
}