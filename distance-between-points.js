/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

function distanceBetweenPoints(a, b) {
    // your code here
    //d=√((x_2-x_1)²+(y_2-y_1)²)
    return Math.sqrt( Math.pow(b.x-a.x, 2) +  Math.pow(b.y-a.y, 2))
  }