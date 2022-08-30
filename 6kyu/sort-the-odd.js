/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    // Return a sorted array.
    //Declare variables to hold the different arrays
    let evens = []
    let odd = []
    let output = []
    //Initialzie first for loop
    //To filter the elements in even or odd array
    for(i=0; i<array.length; i++){
      if(array[i]%2 === 0){
        evens.push(array[i])
      } else {
        odd.push(array[i])
      }
    }
    ///sort the odd array
    odd.sort((a, b) => a - b)
    //Initialize sencond for loop
    for(i=0; i<array.length; i++){
        //If element is divisible by 2
      if(array[i]%2 === 0){
        //Send the first element of the evens array, and shift it
        output.push(evens.shift())
        //Else,
      } else {
        //Shift the sorted element of the odd array
        output.push(odd.shift())
      }
    }
    //Return the output array
    return output
    
  }