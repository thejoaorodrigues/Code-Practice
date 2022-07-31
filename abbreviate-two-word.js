/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name){
    // code away
    //Declare variable to hold the abbreviated name
    let abbreviature = "" 
    //Pass the name into an array, so we can separate all the names
    let arr = name.toUpperCase().split(' ')
    //For each name in the array
    for(i=0; i<arr.length; i++){
        //If the name isn't the last in the array
        if(!i == arr.length-1){
            //Append to the abbreviature variable the first letter of the name, as well a dot
            abbreviature += arr[i][0]
            abbreviature += '.'
        //If the name is the last element of the array,
        } else {
            //Only append the first letter of the name
            abbreviature += arr[i][0]
        }
    }
    //Return the abbreviature
    return abbreviature
}