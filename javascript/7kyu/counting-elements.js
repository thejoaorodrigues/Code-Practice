/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john']) 
#=> { 'james': 2, 'john': 1}
*/

function count(array){
    //your code here
    //Declare an object literal
    let items = {};
    //for each element of the array
    array.forEach(element => {
        //Sum 1 to the current value
      items[element] = (items[element] || 0) + 1;
    });
    //Return the object 
    return items;
  }