/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers
*/

var countSheep = function (num){
    //your code here
    //Declare count variable to hold the string
    let count  = ""
    //Initialize for loop, must start at 1 sheep, and not 0 sheep
    for (i=1; i<=num; i++){
        //For every sheep, append to the count variable the count 
        count += `${i} sheep...`
    }
    //Return the string populated
    return count
  }