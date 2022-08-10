/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string
*/

String.prototype.toAlternatingCase = function() {
    // Define your method here :)
    //Pass string objet to an array
    let string = this.split('')
    //Declare variable to hold the new string
    let resultStr = ""
    //Initialize for loop
    for(i=0; i<string.length; i++){
        //If index element is in lower case
        if(string[i] === string[i].toLowerCase()){
            //Pass it to the string in upper case
            resultStr += string[i].toUpperCase()
        //Else if index element is upper case
        } else if (string[i] === string[i].toUpperCase()){
            //Pass it to the string in lower case
            resultStr += string[i].toLowerCase()
        //Else
        } else {
            //Pass it as it is
            resultStr += string[i]
        }
    }
    //Return the string
    return resultStr
}