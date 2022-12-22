/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    //Declare non constant array variable to store values
    let array = []
    //Iterate through the array in reverse
    for(i=n; i>=1; i--){
        //Push the i element to the array
        array.push(i)
    }
    //Return the array after the loop
    return array;
};