/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    //Declare sum variable, and reduce the array to sum all the grades
    const sum = marks.reduce((acc, val) => {
      return acc + val
    }, 0)
    //Return the average, rounded down to the nearest integer
    return Math.floor(sum/marks.length)
}