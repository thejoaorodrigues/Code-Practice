/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    //Declare students count variable, with the length of array + 1
    let students = classPoints.length + 1 
    //Declare sum of points of the students
    let studentsPoints = classPoints.reduce((acc, val) => {
      return acc + val
    })
    //Declare the average variable, and add yourPoints to the students points
    let classAverage = (studentsPoints+yourPoints)/students
    //Return true or false accordingly
    return yourPoints >= classAverage ? true : false
}
  