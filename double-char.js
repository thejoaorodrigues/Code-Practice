/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
    // Your code here
    //Declare variable to hold the doubled string
    let double = ""
    //Initialize for loop
    for(i=0; i<str.length; i++){
        //For every letter on the string, repeat each letter 2 times and append it to double string
        double += str[i].repeat(2)
    }
    //Return the doubled string
    return double
}
  