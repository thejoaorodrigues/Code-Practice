/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

function grow(x){
    //Reduce x
    return x.reduce((acc, val) => {
        //Multiply the val to the accumulator
        return acc * val
    //Initial value must be 1 for multiplications    
    }, 1)
}