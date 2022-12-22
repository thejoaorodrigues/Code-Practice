/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

function squareOrSquareRoot(array) {
    //Declare new array and pass map
    let newArr = array.map(element => {
        //If square root of element is divisible by 1 (has a square root)
        if (Math.sqrt(element)%1 === 0){
            //Return the square root
            return Math.sqrt(element)
        //Else    
        } else {
            //Return the number, squared
            return Math.pow(element, 2)
        }
    })
    //Return the new array
    return newArr
}