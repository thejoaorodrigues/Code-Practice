/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
    // code here
    //Convert array of numbers to array of strings
    let numbers = array.map(element => {
      return element.toString()
    })
    //Declare the maxlength to the first element
    let maxLength = numbers[0]
    //For each element
    numbers.forEach(element => {
        //check if has bigger length than variable
      if(element.length > maxLength.length){
        //If so, reassign it
        maxLength = element
      }
    })
    //Return the variable
    return +maxLength
  }