/*
You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.

The array is unsorted.

An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.

You should return the duplicate value as a single integer.
*/

function findDup( arr ){
    //Sort the arrya
    arr.sort((a, b) => a - b)
    //Initialize for loop
    for(i=0; i<arr.length; i++){
        //If element at index i is equal as the element at the next index
      if(arr[i] === arr[i+1]){
        //Return the element
        return arr[i]
      }
    }
  }