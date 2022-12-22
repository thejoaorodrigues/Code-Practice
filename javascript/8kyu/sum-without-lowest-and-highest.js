/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array) {
    //Check conditional to see if array is good for sum
    if(!array || array.length === 0 || array.length === 1){
        //Return 0 if it isn't
        return 0
    //Else,
    } else {
        //Sort the array to 
        array.sort((a, b) => a - b)
        //Exclude the last element and
        array.pop()
        //Exclude the first element
        array.shift()
        //Declare sum and reduce the remaining array to calculate the sum of the elements
        const sum = array.reduce((acc, val) => {
        return acc + val
            }, 0)
        //Return the sum
        return sum
  }
}