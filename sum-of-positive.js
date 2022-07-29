/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    //Declare variable to hold the sum value
    let sum = 0;
    //Loop through the array
    arr.forEach(element => {
      //If element is positive, add it to the sum value
      if (element >= 0){
        sum += element
      }
    })
    //Return the sum after looping through the array of numbers
    return sum
  }