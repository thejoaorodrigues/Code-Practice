/*
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x){
    //Declare strings and nums
    let nums = 0
    let strings = 0
    //For each element
    x.forEach(element => {
        //Check to see if its number or string
      if (typeof element === 'number'){
        //Add to the correct variable
        nums += element
      } else if(typeof element === 'string'){
        strings += Number(element)
      }
    })
    //Return the subtraction of the two
    return nums-strings
  }