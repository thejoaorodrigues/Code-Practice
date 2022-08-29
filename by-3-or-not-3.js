/*
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator.
*/

function divisibleByThree(str){
    //Pass the string to array
    str = str.split('').reduce((acc, val) => {
        //Calculate the sum of the array
      return acc + Number(val)
    }, 0)
    //Check divisibility by 3
    return str%3 === 0 ? true : false
  }