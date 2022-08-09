/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    //Return the number of years, wjere 2*son's age would equal dads
    return Math.abs(dadYearsOld - 2*sonYearsOld)
}