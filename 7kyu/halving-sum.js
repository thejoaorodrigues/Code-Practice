/*
Task
Given a positive integer n, calculate the following sum:

n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.

Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/

function halvingSum(n) {
    //Declare output to 0
    let output = 0
    //While loop
      while(n >= 1){
        //Increment output by n
        output += Math.floor(n)
        //Halve n
        n /= 2
      }
      //Return the output
    return output
  }
  