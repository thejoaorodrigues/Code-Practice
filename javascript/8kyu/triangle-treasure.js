/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/

// Return the nth triangular number
/*
function triangular( n ) {
  if(n <= 0){
    return 0
  } else {
    return triangular(n-1)+n
  }
}
*/
function triangular( n ) {
    //Return 0 if negative
    if(n <= 0){
      return 0
      //Else
    } else {
        //Declare output variable
      let output = 0
      //for each number until n
      for(i=0; i<=n; i++){
        //Ass i to the output
        output += i
      }
      //Return the sum
      return output
    }
  }