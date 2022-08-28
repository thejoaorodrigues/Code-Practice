/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
    //Declare sum and assign to 0
    let sum = 0
    //Pass the absolute value to an array of numbers
    number = Math.abs(number).toString().split('')
    //For each number
    number.forEach(element => {
        //Sum the element
         sum += +element   
    })
    //Return the sum
    return sum
  }
  