/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    // your code here
    //Declare variables to hold the data desired
    let positiveCount = 0;
    let negativeSum = 0
    //If input doesn't exist or is an empty array
    if(!input || input.length === 0){
        //Return an empty array
        return []
    //Else    
    } else {
        //Iterate through the populated array
        for(i=0; i<input.length; i++){
            //If input[i] > 0
            if(input[i] > 0){
                //Increment the positiveCount variable
                positiveCount++
            //Else, if input[i] < 0
            } else if(input[i] < 0) {
                //Add the negative value to the negativeSum variable
                negativeSum += input[i]
            }
        }
    }
    //Return the array with the two variables
    return [positiveCount, negativeSum]
}