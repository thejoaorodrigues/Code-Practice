/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

function disemvowel(str) {
    //Declare new string to hold the result
    let newStr = ""
    //Declare vowels array to compare
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //Split the string to have an array, and for each element
    str.split('').forEach(element => {
        //If the element - in lower case - is not included in the vowels array
        if(!vowels.includes(element.toLowerCase())){
            //Append it to the string
            newStr += element
        }
    })
    //Return the new String
    return newStr
}