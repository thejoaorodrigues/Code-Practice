/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
    // your code here
    //If array is null, or empty
    if (array === null || array.length === 0){
        //Return 0
        return 0
    } else {
        //Else, declare variables to hold the sum and count, to calculate the average
        //Count = lenght of array
        const count = array.length
        //Sum is using the reduce method to calculate the sum of the entire array
        const sum = array.reduce((acc, val) =>{
            return acc + val
    }, 0)
    //Calculate average by dividing sum/count
    return sum/count
    }
}  