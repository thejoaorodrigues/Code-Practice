/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    //Declare variables to hold the cat and dog years
    let catYears = 0
    let dogYears = 0
    //For every human year
    for(i=1; i<=humanYears; i++){
        //Sum the corresponding animal years
        if(i===1){
            catYears += 15
            dogYears += 15
        } else if (i === 2){
            catYears += 9
            dogYears += 9
        } else {
            catYears += 4
            dogYears += 5
        }
    }
    //Returns the three years as array
    return [humanYears,catYears,dogYears];
}
  