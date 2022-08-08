/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

function arr(n){
    //Declare new variable for array
    var newArr = [];
    //Initialize for loop
    for(var i = 0; i < n; i++){
        //For each element, push i to the new Array
        newArr.push(i);
    }
    //Return the array
    return newArr;
}