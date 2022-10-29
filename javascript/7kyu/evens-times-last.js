/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.


*/

function evenLast(numbers) {
    // Good luck
    //Filter the elements with even index
    let arr = numbers.filter((element, index) => index%2 === 0)
    //Return the sum of the alements in the array
    return arr.reduce((acc, val) => {
        //where the element is multiplied by the last element of numbers
      return acc + val*numbers[numbers.length-1]
    }, 0)
  }