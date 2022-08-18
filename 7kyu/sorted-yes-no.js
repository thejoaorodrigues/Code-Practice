/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

function isSortedAndHow(array) {
    //Declare a copy of the array and slice the original
    let copy = array.slice()
    //If the string created by the array
    //Is equal to the sorted ascending array of the copy
    if(array.join('') == copy.sort((a, b) => a - b).join('')){
        //Return yes
        return "yes, ascending"
    //If the string created by the array
    //Is equal to the sorted descending array of the copy
    } else if (array.join('') == copy.sort((a, b) => b -a).join('')){
        return "yes, descending"
    //Else
    } else {
        //Return no
        return "no"
    }
}