/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/

function invert(array) {
    //Create new variable to return, and create new array with array.map()
    let newArr = array.map((element) => {
        //For each element of the array, multiply it by -1 (inverting it)
        return element *-1
    });
    //Return the new array
    return newArr
}
