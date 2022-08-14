/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    //Check if square root is a whole number
    if(!(Math.sqrt(sq)%1 === 0)){
        //If not, return -1
        return -1
    //Else
    } else {
        //Find the square root of the number, and add 1
        let index = Math.sqrt(sq)+1
        //Return the index squared
        return Math.pow(index, 2)
    }
}