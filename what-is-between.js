/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    // your code here
    //Declare array to hold all the values
    let array = []
    //Initialize for loop
    for(i=a; i<=b; i++){
        //For each element, push it to array
        array.push(i)
    }
    //Return array
    return array
}