/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    //Pass the string to an array
    s = s.split(' ')
    //Declare shortest to hold the shortest length, and assign it to the first element of s
    let shortest = s[0].length
    //for each element of s,
    s.forEach(element => {
        //If the element is less than shortest
        if (element.length < shortest){
            //Assing shortest to the length of the element
            shortest = element.length
        }
    })
    //Return shortest
    return shortest
}