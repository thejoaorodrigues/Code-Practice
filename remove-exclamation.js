/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

function remove (string) {
    //coding and coding....
    //Check is char is equal to !
    if (string[string.length-1] === '!'){
        //If it is, pass the string to an array,
        string = string.split('')
        //remove the last character
        let lastChar = string.pop()
        //And join again as strinh
        return string.join('')
    //Else
    } else {
        //Return the string
        return string
    }
}