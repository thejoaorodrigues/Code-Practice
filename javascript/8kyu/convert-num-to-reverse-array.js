/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]
*/

function digitize(n) {
    //code here
    //Pass the number to a string, so we can rearrange the array and reverse it
    n = String(n).split('').reverse()
    //For every element inside the array
    for(i=0; i<n.length; i++){
        //Parse the string element to a number element
        n[i] = parseInt(n[i])
    }
    //Return the array as numbers
    return n
}