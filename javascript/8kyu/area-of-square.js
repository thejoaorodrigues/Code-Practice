/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

function squareArea(A){
    let radius = ((4*A/Math.PI)/2)
    let area = radius*radius
    //Return the area of the square rounded
    return Math.round(area*100)/100
  }