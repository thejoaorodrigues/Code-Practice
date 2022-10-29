/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    //Declare variable to hold the count of vowels
    let count = 0
    //Declare the vowels array to compare
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //Split the string to get an array, and
    str.split('').forEach(element => {
        //For each character, if it is included in the vowels array
        if (vowels.includes(element)){
            //Increment the count
            count++
        }
    })
    //Return the count
    return count;
}