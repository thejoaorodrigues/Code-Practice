/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

function gimme (triplet) {
    //Declare secondArray index, and make a copy of the array passed
    let secondArray = triplet.slice(0)
    //Sort the second array in ascending order
    secondArray.sort((a,b) => a - b)
    //Return the index of the middle element in the sorted array, looked on the triplet array
    return triplet.indexOf(secondArray[Math.floor(secondArray.length/2)])
}