/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
    // Code here
    //Declare variable sum to hold the calculations
    let sum = 0;
    //For each number between 0 and the numbers passed as argument, 
    for (i=0; i<=num; i++){
        //Add each value holded by i to the sum variable
        sum += i
    }
    //Return the result evaluated
    return sum
}