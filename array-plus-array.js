/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    //Declare new array variable to hold the two arrays, and concat them together
    let newArr = arr1.concat(arr2);
    //Declare sum, and sum all of the element
    const sum = newArr.reduce((acc, val) => {
      return acc + val
    }, 0)
    //Return the sum calculated
    return sum
  }