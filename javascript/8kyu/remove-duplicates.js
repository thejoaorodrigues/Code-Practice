/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

function distinct(a) {
    //Declare output array to hold the single values
    let output = []
    //For each value in a
    a.forEach(element => {
        //If its not included in array output
        if (!output.includes(element)){
            //Push it to there
            output.push(element)
        }
    })
    //return the populated array
    return output
}