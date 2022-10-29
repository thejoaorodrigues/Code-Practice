/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    // Go for it
    //Convert the string into an array
    str = str.split(' ')
    //Declare a new array, new Str
    let newString = str.map(element => {
        //and for each element, return the reversed word
        return element.split('').reverse().join('')
    })
    //Return the array as string, separated by spaces
    return newString.join(' ')
}