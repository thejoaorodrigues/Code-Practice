/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

https://en.wikipedia.org/wiki/Triangle
*/

function otherAngle(a, b) {
    //Return the remaining angle, subtracting a and b to 180º
    return 180-a-b;
}