/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
    //your code here
    //Assing counter to 0
    let counter = 0
    //For loop through i months
    for(i=0; i<12; i++){
        //Increment counter if a new date, with year, i month and 13th day is equal to a 5 (friday)
      counter += new Date(year, i, 13).getDay() === 5
    }
    //Return counter
    return counter
  }