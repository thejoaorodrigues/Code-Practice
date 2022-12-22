/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    //Declare variable to holf the count of sheep
    let count = 0
    //For each element inside the arrayOfSheep array,
    arrayOfSheep.forEach(element => {
        //If said element has a value of true
        if(element === true){
            //Increment the count by 1
            count++;
        }
    })
    //Return the result evaluated
    return count;
}