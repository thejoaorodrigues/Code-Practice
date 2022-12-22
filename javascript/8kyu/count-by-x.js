/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

function countBy(x, n) {
    //Declared varibale to hold the array
    let z = [];
    //Initialize for loop at 1, so we can do the first multiplication
    for(i=1; i<=n; i++){
        //Push to the z array the multiplication of x by the i index number
        z.push(x*i)
    }
    //Return the array
    return z;
}