/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

function oddCount(n){
    // your code here
    //Declare variable to hold the number count
    let numbers = 0
    //Initialize descending for loop, starting at n-1 (current number doesn't count)
    for(i=n-1; i>0; i -= 2){
        //Increment number
        numbers ++
    }
    //Return numbers
    return numbers
}