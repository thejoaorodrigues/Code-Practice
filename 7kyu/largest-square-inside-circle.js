/*
Determine the area of the largest square that can fit inside a circle with radius r.
*/

function areaLargestSquare(r) {
    return Math.floor(Math.pow(Math.sqrt(2)*r, 2))
  }