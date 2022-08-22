/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

function min(arr, toReturn) {
    // TODO
    //Declare minValue variable and assign to the first element
    let minValue = arr[0]
    //For each element
    let min = arr.forEach(element => {
        //check to see if its less than the minValue
      if(element < minValue){
        minValue = element
      }
    })
    //Return the minValue, or the index of the minValue
    return toReturn === 'value' ? minValue : arr.findIndex(element => element === minValue)
  }