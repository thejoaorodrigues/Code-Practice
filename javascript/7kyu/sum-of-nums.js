/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/

function getSum( a,b ){
    //Good luck!
    //Declare varsOrder variable, where we're going to order the two inputs
    let varsOrder = [a, b].sort((a, b) => a - b)
    //Declare result, and assign it to 0
    let result = 0
    //Initialize for loop, where i=first element of varsOrder,
    //while i <= second element of varsOrder
    for(i=varsOrder[0]; i<=varsOrder[1]; i++){
        //For each loop, sum to result the value of i
        result += i
    }
    //Return the result
    return result
}