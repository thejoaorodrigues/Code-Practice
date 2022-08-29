/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

function largest(n,xs){
    // Find the n highest elements in a list
    //Sort the array
  xs.sort((a, b) => a - b)
  return n === 0 ? [] : xs.slice(-n)
}