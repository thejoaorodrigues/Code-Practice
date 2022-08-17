/*
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.
*/

function noOdds( values ){
    // Return all non-odd values
    //Pass a filter through the array and return 
    return values.filter(element => {
        //The values that are even
        return element%2 === 0
    })
}