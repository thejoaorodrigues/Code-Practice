/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/

function sumOfMinimums(arr) {
    // your code here
    //Declare minimums array to hold the min values
    let minimums = []
    //For each sub array of arr
    arr.forEach(element => {
        //Push to the minimums array the minimum element of every sub array
        minimums.push(Math.min(...element))
    })
    //And return the sum of all elements of the array
    return minimums.reduce((acc, val) => {
        return acc+val
    },0)
}