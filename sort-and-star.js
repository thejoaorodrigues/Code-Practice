/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
    //Sort the array s
    //Select the first element - index 0
    //Split the string by character
    //Join them together with '***' in between each character
    return s.sort()[0].split('').join('***')
}