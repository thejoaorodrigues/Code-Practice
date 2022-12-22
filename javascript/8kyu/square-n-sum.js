/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){
    //With the array.reduce(), we can calculate the sum of arrays
    const squaredNumbers = numbers.reduce((acc, val) =>{
        //Return the accumulator, and add to it the square of the val passed by each index
        return acc + val*val
    }, 0) //The initial value is 0
    //Return the squaredNumbers evaluated
    return squaredNumbers
}