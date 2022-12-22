/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/

function monkeyCount(n) {
    // your code here
    //Declare variable to hold the array
    let arr = []
    //Initialize for loop at 1, so we can start count at 1
    for(i=1; i<=n; i++){
        //Push to arr the current element
        arr.push(i)
    }
    //Return the array populated
    return arr
}