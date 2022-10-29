/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

var countBits = function(n) {
    // Program Me
    //convert the decimal number to a binary
    n = n.toString(2)
    //Declare and assign counter to 0
    let counter = 0
    //For each number of the binary
    n.split('').forEach(element => {
        //If its a 1
      if(element === '1'){
        //Increment the counter
        counter++
      }
    })
    //Return the sum of the counter
    return counter
  };