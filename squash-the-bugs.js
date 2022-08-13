/*
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
*/

function findLongest(str) {
    //Only necessary to correct the bugs
    let spl = str.split(" ");
    let longest = 0
    
    for (i=0; i<spl.length; i++){
        if(spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}