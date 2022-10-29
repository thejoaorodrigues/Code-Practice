/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
    //Pass all the string to lower case and to an array
    str = str.toLowerCase().split('')
    //Declare variables to hold the count of the two characters
    let xCount = 0
    let oCount = 0
    //For each element of the str
    str.forEach(element => {
        //If the element is a 'x'
        if (element === 'x'){
            //Increment xCount
            xCount++
        //else if element is an 'o'    
        } else if (element === 'o'){
            //Increment oCount
            oCount++
        }
    })
    //Check to see if xCount is equal to oCount and return true or false
    return xCount === oCount ? true : false
}