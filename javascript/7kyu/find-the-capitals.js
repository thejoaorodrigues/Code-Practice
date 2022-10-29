/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
	// Write your code here
    //Declare result array to hold the indexes
  let result = []
  //Pass the string into an array
  word = word.split('')
  //For each element
  word.forEach((element, index) => {
    //If the element is in upper case
    if(element === element.toUpperCase()){
        //Puhs the index to the array
        result.push(index)
    }
  })
  //Return the array
  return result
};