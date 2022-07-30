/*
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
    // Finish this :)
    //Declare variable evalYear, that is going to parse the number into an array of the numbers containing it
    let evalYear = String(year).split('')
    //From evalYear, we're going to remove the last 2 numbers, so we can separate only the numbers that construct the century
    evalYear.splice(-2, 2)
    //Declare variable century, and parse the evaluation above to a number
    let century = +evalYear.join('')
    //If the last 2 digits of year > 0, century increments. Else, return the century calculated on the previous step
    return year%100>0 ? century+1 : century;
}