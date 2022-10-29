/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)


*/

function solution(number){
    //If number < 0
    if(number < 0){
        //Return 0
        return 0
    //Else
    } else {
        //Declare array for push the multiples
        let multiples = []
        //Initialize for loop
        for(i=0; i<number; i++){
            //If i is divisible by one of the numbers
            if (i%5 === 0 || i%3 === 0){
                //Push it to the array
            multiples.push(i)
            }
      }
      //Declare sum and reduce the array
      let sum = multiples.reduce((acc, val) => {
            return acc + val
      }, 0)
      //Return the sum
      return sum
    }
}