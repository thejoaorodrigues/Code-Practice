/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

function findUniq(arr) {
    // do magic
    //Sort the array
    arr.sort((a, b) => a - b)
    //If the two first elements are equal, the unique value is on the end
    //Else, its the first element
    return arr[0] === arr[1] ? arr[arr.length-1] : arr[0]
  }
  
/*
  function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
*/
