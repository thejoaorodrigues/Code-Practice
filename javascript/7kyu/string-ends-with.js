/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
    // TODO: complete
    //If ending is '',
    if (ending === ''){
        //Return true
        return true
    //If the last elements of the string are equal to the ending
    } else if (str.slice(-ending.length) === ending){
        //Return true
        return true
    //Else
    } else {
        //Return false
        return false
    }
}