/*
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/

function replace(s){
    //coding and coding....
    //Declare array of vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']
    //Declare output variable
    let output = ""
    //For each letter
    for(i=0; i<s.length; i++){
        //If its not a vowels
        if(!vowels.includes(s[i].toLowerCase())){
            //Append non vowel to string
            output += s[i]
        //Else
        } else {
            //Replace by a '!'
            output += '!'
        }
    }
    //Return the string
    return output
}