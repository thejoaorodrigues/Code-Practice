/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut (string) {
    //Declare array of vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']
    //Declare new string and for each element
    let newString = string.split('').filter(element => {
        //Filter the letters that are not included in vowels
        return !vowels.includes(element)
    })
    //Return new string
    return newString.join('')
}