/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
    //Declare new array, nums, with the elements of x passed to numbers
    let nums = x.map(element => {
        return parseInt(element)
    })
    //Reduce the array created to sum all the numbers  
    const sum = nums.reduce((acc, val) => {
        return acc + val
    }, 0)
    //Return the sum
    return sum
}