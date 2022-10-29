/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

var number=function(array){
    //your awesome code here
    //Declare new array to hold the data
    let newArray = []
    //For each element of array
    array.forEach((element, index) => {
        //Push to the new array, the index+1 (so it starts at 1), plus the element itself
        newArray.push(`${index+1}: ${element}`)
    })
    //Return the new Array
    return newArray
}